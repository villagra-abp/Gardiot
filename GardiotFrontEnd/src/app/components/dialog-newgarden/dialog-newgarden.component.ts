import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Select2OptionData } from 'ng2-select2';
import { GardenService } from "../../services/garden.service";
import { Garden } from "../../classes/garden.class";


@Component({
  selector: 'app-dialog-newgarden',
  templateUrl: './dialog-newgarden.component.html',
  styleUrls: ['./dialog-newgarden.component.css']
})
export class DialogNewgardenComponent implements OnInit {
  private garden = new Garden("");
  private countryData: Observable<Array<Select2OptionData>>;
  private startCountry: Observable<string>;
  private cityData: Observable<Array<Select2OptionData>>;
  private startCity: Observable<string>;
  private countries: any[] = [];
  private cities: any[] = [];
  private zip: string = "";

  constructor(
    public thisDialogRef: MatDialogRef<DialogNewgardenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _gardenService: GardenService,
    private _route: Router,
  ) { }

  onCloseConfirm() {
    this.thisDialogRef.close('Guardado');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

  mostrar() {
    this._gardenService.details()
      .subscribe(data => {
        if (data != null) {
          this._route.navigate(['/garden']);
        }

      },
        error => {
          console.error(JSON.parse(error._body).Mensaje);
        });
  }

  listarPaises() {
    this._gardenService.listCoutries().subscribe(data => {
        let aux = [];
        aux.push({ id: 0, text: "Selecciona un país" });
        for (let i = 0; i < data.geonames.length; i++) {
          aux.push({ id: data.geonames[i].countryCode, text: data.geonames[i].countryName });
        }
        this.countryData = Observable.create((obs) => {
          obs.next(aux);
          obs.complete();
        });
        this.startCountry = Observable.create((obs) => {
          obs.next(this.garden.countryCode);
          obs.complete();
        }).delay(1000);
      },
        error => {
          console.error(error);
        });
  }

  mostrarCiudad() {
    let aux = [];
    aux.push({ id: this.garden.city, text: this.garden.city });

    this.cityData = Observable.create((obs) => {
      obs.next(aux);
      obs.complete();
    });
    if (this.garden.city != undefined)
      document.querySelector('#ciudad').innerHTML = this.garden.city;
  }

  saveCountry(e) {
    if (e.value != 0 && e.value !== undefined) {
      this.garden.countryCode = e.value;
    }
  }

  saveCity(e) {
    if (e.value != 0 && e.value !== undefined) {
      this.garden.city = e.value;
      this.mostrarCiudad();
    }
  }

  searchZip(event: KeyboardEvent): void {
    //aqui vamos cargando las posibles ciudades a elegir
    let input = (<HTMLInputElement>document.querySelector("#zipCode"));
    if (this.garden.countryCode != undefined) {
      if (input.value.length == 5) {
        this._gardenService.listCitiesByZip(this.garden.countryCode, input.value)
          .subscribe(data => {
            let sp = document.querySelector('#ciudad');
            if (data.length > 0) {
              this.garden.latitude = data[0].lat.toFixed(2);
              this.garden.longitude = data[0].lng.toFixed(2);
              if (data[0].adminName3 !== undefined) {
                this.garden.city = data[0].adminName3;
                sp.innerHTML = data[0].adminName3;
              }
              else if (data[0].adminName2 !== undefined) {
                this.garden.city = data[0].adminName2;
                sp.innerHTML = data[0].adminName2;
              }
              else if (data[0].adminName1 !== undefined) {
                this.garden.city = data[0].adminName1;
                sp.innerHTML = data[0].adminName1;
              }
              else {
                this.garden.city = '';
                sp.innerHTML = 'Código postal no encontrado';
              }
            }
            else {
              this.garden.city = '';
              sp.innerHTML = 'Código postal no encontrado';
            }
            input.value = '';

          },
            error => {
              console.error(error);
            });
      }
    }
  }



  ngOnInit() {
    this.mostrar();
    this.listarPaises();
    this.mostrarCiudad();
    this.garden.width=19;
    this.garden.length=19;
  }
}
