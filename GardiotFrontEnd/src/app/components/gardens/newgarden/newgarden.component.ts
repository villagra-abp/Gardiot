import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { GardenService } from "../../../services/garden.service";
import { Garden } from "../../../classes/garden.class";
import { PlantService } from "../../../services/plant.service";
import { Plant } from "../../../classes/plant.class";
import { AppComponent } from "../../../app.component";
import { Observable } from 'rxjs/Observable';
import { Select2OptionData } from 'ng2-select2';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/delay';
import {Overlay} from '@angular/cdk/overlay';

import { DialogNewgardenComponent } from '../../dialog-newgarden/dialog-newgarden.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-newgarden',
  templateUrl: './newgarden.component.html'
})

export class NewGardenComponent implements OnInit {

  garden = new Garden("");


  private plant: number[];
  private plants: any[] = [];
  countries: any[] = [];
  cities: any[] = [];
  zip: string = "";
  countryData: Observable<Array<Select2OptionData>>;
  startCountry: Observable<string>;
  cityData: Observable<Array<Select2OptionData>>;
  startCity: Observable<string>;

  private idNewJardin: number;



  constructor(
    private _gardenService: GardenService,
    private _plantService: PlantService,
    private _route: Router,
    private datePipe: DatePipe,
    private _appComponent: AppComponent,
    private dialog: MatDialog,
  ) { }

  @HostListener('document:keyup', ['$event'])

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

  listarPaises() {
    this._gardenService.listCoutries()
      .subscribe(data => {
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

  mostrarPlantas() {
    this._plantService.detailsAll(1, 10000)
      .subscribe(data => {
        for (let key$ in data) {
          this.plants.push(data[key$]);
        }
      },
        error => {
          console.error(error);
        });
  }



  //Envia los nuevos datos del jardin a  a GardenService para guardarlos
  newGarden() {

    this._gardenService.insertGarden(this.garden)
      .subscribe(data => {
        this.idNewJardin = data;
        let X: number = -20;
        let f = new Date();
        let fecha_actual: string;
        f.getDate();
        f.getMonth() + 1;
        f.getFullYear();
        fecha_actual = this.datePipe.transform(f, 'yyyy-MM-dd');
        if (this.plant !== undefined) {
          for (let cont = 0; cont < this.plant.length; cont++) {
            X = X - 1;
            this._gardenService.saveplants(this.plant[cont], X, this.idNewJardin, fecha_actual)
              .subscribe(data => {
              },
                error => {
                  let v = JSON.parse(error._body);
                });
          }
        }
        this._appComponent.mensajeEmergente("Jardin Creado", "success", "garden");
      },
        error => {
          let v = JSON.parse(error._body);
          this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
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

  ngOnInit() {
    this.dialog.open(DialogNewgardenComponent, { width: '800px', data: {}});
    this.garden.width=19;
    this.garden.length=19;
    this.mostrar();
    this.mostrarPlantas();
    this.listarPaises();
    this.mostrarCiudad();
  }

}
