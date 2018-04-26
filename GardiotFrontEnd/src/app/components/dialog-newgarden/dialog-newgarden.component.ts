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

  constructor(
    public thisDialogRef: MatDialogRef<DialogNewgardenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _gardenService: GardenService,
    private _route: Router,
  ) { }

  onCloseConfirm() {
    this.delete();
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
  delete() {
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



  ngOnInit() {
  }
}
