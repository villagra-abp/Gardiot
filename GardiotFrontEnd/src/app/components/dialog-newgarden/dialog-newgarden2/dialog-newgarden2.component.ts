import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Select2OptionData } from 'ng2-select2';
import { GardenService } from "../../../services/garden.service";
import { Garden } from "../../../classes/garden.class";
import { MatDialog } from '@angular/material';
import { DialogNewgarden3Component } from '../dialog-newgarden3/dialog-newgarden3.component';
import { DialogNewgarden1Component } from '../dialog-newgarden1/dialog-newgarden1.component';

@Component({
  selector: 'app-dialog-newgarden2',
  templateUrl: './dialog-newgarden2.component.html',
  styleUrls: ['./dialog-newgarden2.component.css']
})
export class DialogNewgarden2Component implements OnInit {
  public garden = new Garden("");
  public idNewJardin: number;
  public countryData: Observable<Array<Select2OptionData>>;
  public startCountry: Observable<string>;
  public cityData: Observable<Array<Select2OptionData>>;
  public startCity: Observable<string>;
  public countries: any[] = [];
  public cities: any[] = [];
  public zip: string = "";

  public photoURL = "";

  constructor(
    public thisDialogRef: MatDialogRef<DialogNewgarden2Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _gardenService: GardenService,
    public _route: Router,
    public dialog: MatDialog,
  ) {
    if(window.location.toString().indexOf("localhost")>=0){
      this.photoURL="/assets";
    }
    else if(window.location.toString().indexOf("gardiot")>=0){
      this.photoURL="/app/assets";
    }
  }

  getid() {
    this._gardenService.details().subscribe(data => {
        if (data != null) {
          console.log(data);
          this.garden = data;
          console.log(this.garden);
        }
      },
      error => {
        console.error(JSON.parse(error._body).Mensaje);
      });
  }

  onCloseConfirm() {
    this.openDialog();
    this.saveGarden();
    this.thisDialogRef.close('Guardado');
  }

  onCloseAtras() {
    this.openDialogAtras();
    this.thisDialogRef.close('Guardado');
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogNewgarden3Component, {
      width: '55em', disableClose: true, data: {}});
  }
  openDialogAtras() {
    let dialogRef = this.dialog.open(DialogNewgarden1Component, {
      width: '45em', disableClose: true, data: {}});
  }

  listarPaises() {
    this._gardenService.listCoutries().subscribe(data => {
        let aux = [];
        aux.push({ id: 0, text: "Ninguno" });
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
    console.log(e.value);
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
            console.log(data);
            let sp = document.querySelector('#ciudad');
            if (data.length > 0) {
              this.garden.latitude = data[0].lat.toFixed(2);
              this.garden.longitude = data[0].lng.toFixed(2);
              if (data[0].adminName3 !== undefined && !data[0].adminName3.includes("/")) {
              this.garden.city = data[0].adminName3;
              //this.city = data[0].adminName3;
              //console.log(this.city);
              }
              else if (data[0].placeName !== undefined) {
                this.garden.city = data[0].placeName;
                //this.city = data[0].placeName;
                //console.log(this.city);
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



  searchZip2(): void {
    //aqui vamos cargando las posibles ciudades a elegir
    var input = this.garden.zip;
    console.log(input);
    if (this.garden.countryCode != undefined) {
      if (input.length == 5) {
        console.log("entra");
        this._gardenService.listCitiesByZip(this.garden.countryCode, input)
          .subscribe(data => {
            //let sp = document.querySelector('#ciudad');
            if (data.length > 0) {
              this.garden.latitude = data[0].lat.toFixed(2);
              this.garden.longitude = data[0].lng.toFixed(2);
              if (data[0].adminName3 !== undefined && !data[0].adminName3.includes("/")) {
              this.garden.city = data[0].adminName3;
              //this.city = data[0].adminName3;
              //console.log(this.city);
              }
              else if (data[0].placeName !== undefined) {
                this.garden.city = data[0].placeName;
                //this.city = data[0].placeName;
                //console.log(this.city);
              }
              else if (data[0].adminName2 !== undefined) {
                this.garden.city = data[0].adminName2;
               // sp.innerHTML = data[0].adminName2;
              }
              else if (data[0].adminName1 !== undefined) {
                this.garden.city = data[0].adminName1;
                //sp.innerHTML = data[0].adminName1;
              }
              else {
                this.garden.city = '';
                // sp.innerHTML = 'Código postal no encontrado';
              }
            }
            else {
              this.garden.city = '';
              //sp.innerHTML = 'Código postal no encontrado';
            }
            input = '';
            

          },
            error => {
              console.error(error);
            });
      }
    }
  }

  saveGarden() {
    this._gardenService.modifyGarden2(this.garden)
      .subscribe(data => {
      },
        error => {
          let v = JSON.parse(error._body);
        });
  }

  ngOnInit() {
    this.listarPaises();
    this.mostrarCiudad();
    this.getid();
  }

}
