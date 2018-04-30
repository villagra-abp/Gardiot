import { Component, OnInit, } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { GardenService } from "../../../services/garden.service";
import { Garden } from "../../../classes/garden.class";
import { PlantService } from "../../../services/plant.service";
import { Plant } from "../../../classes/plant.class";
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/delay';
import {Overlay} from '@angular/cdk/overlay';

import { DialogNewgardenComponent } from '../../dialog-newgarden/dialog-newgarden.component';
import { MatDialog } from '@angular/material';
declare var iniciar: any;

@Component({
  selector: 'app-newgarden',
  templateUrl: './newgarden.component.html',
  styleUrls: ['./newgarden.component.css']
})

export class NewGardenComponent implements OnInit {
  private plant: number[];
  private plants: any[] = [];
  private idNewJardin: number;
  private garden = new Garden("");
  private accion: string;



  constructor(
    private _gardenService: GardenService,
    private _plantService: PlantService,
    private _route: Router,
    private datePipe: DatePipe,
    private dialog: MatDialog,
  ) { }

  // @HostListener('document:keyup', ['$event'])


  firstgarden() {
    this._gardenService.firstgarden()
      .subscribe(data => {
        if (data == "Existe") {
          this._route.navigate(['/detail']);
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
  // newGarden() {
  //
  //   this._gardenService.insertGarden(this.garden)
  //     .subscribe(data => {
  //       this.idNewJardin = data;
  //       let X: number = -20;
  //       let f = new Date();
  //       let fecha_actual: string;
  //       f.getDate();
  //       f.getMonth() + 1;
  //       f.getFullYear();
  //       fecha_actual = this.datePipe.transform(f, 'yyyy-MM-dd');
  //       if (this.plant !== undefined) {
  //         for (let cont = 0; cont < this.plant.length; cont++) {
  //           X = X - 1;
  //           this._gardenService.saveplants(this.plant[cont], X, this.idNewJardin, fecha_actual)
  //             .subscribe(data => {
  //             },
  //               error => {
  //                 let v = JSON.parse(error._body);
  //               });
  //         }
  //       }
  //       this._appComponent.mensajeEmergente("Jardin Creado", "success", "garden");
  //     },
  //       error => {
  //         let v = JSON.parse(error._body);
  //         this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
  //       });
  // }

  mostrar() {
    this._gardenService.details()
      .subscribe(data => {

        if (data != null) {
          this.garden.id = data.id;
          this.garden.title = data.title;
          this.garden.width = data.width;
          this.garden.length = data.length;
          this.garden.longitude = data.longitude;
          this.garden.latitude = data.latitude;
          this.garden.soil = data.soil;
          this.garden.user = data.user;
          this.garden.countryCode = data.countryCode;
          this.garden.city = data.city;
          this.garden.plants = data.plants;
          new iniciar("detail", this.garden);

        } else {
          this._route.navigate(['/newgarden']);
        }
      },
      error => {
        this.dialog.open(DialogNewgardenComponent, { width: '800px', data: {id: 1}});
      });

  }

  toggleState(){
    this.accion=='Editar' ? this.accion='Modo vista' : this.accion='Editar';
  }

  ngOnInit() {
    this.accion='Editar';
    this.firstgarden();
    this.mostrar();
    this.mostrarPlantas();

  }

}
