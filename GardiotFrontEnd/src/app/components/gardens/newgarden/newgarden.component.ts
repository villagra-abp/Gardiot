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
import { RouterLink, ActivatedRoute, Params } from '@angular/router';

import { DialogNewgarden1Component } from '../../dialog-newgarden/dialog-newgarden1/dialog-newgarden1.component';
import { MatDialog } from '@angular/material';
declare var iniciar: any;
declare var motor: any;

@Component({
  selector: 'app-newgarden',
  templateUrl: './newgarden.component.html',
  styleUrls: ['./newgarden.component.css',
              '../garden/garden.component.css',
              '../editgarden/editgarden.component.css']
})

export class NewGardenComponent implements OnInit {
  private plant: number[];
  private plants: any[] = [];
  private plantmotor: number[];
  private plantsmotor: any[] = [];
  private idNewJardin: number;
  private garden = new Garden("");
  private accion: string;

  private numeroItems: number;
  private paginaActual: number = 1;
  private elementosPorPagina: number = 8;
  private estado: boolean = false;// false es listado y true buscador



  constructor(
    private _gardenService: GardenService,
    private _plantService: PlantService,
    private _route: Router,
    private datePipe: DatePipe,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
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
          this.inicializar();


        } else {
          this._route.navigate(['/newgarden']);
        }
      },
      error => {
        this.dialog.open(DialogNewgarden1Component, { width: '800px', data: {id: 1}});
      });

  }


  toggleState(){
    this.accion=='Editar' ? this.accion='Modo vista' : this.accion='Editar';
  }

  ActualizarPagina() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.paginaActual = params['pag'];
      this.getitems();
    });
  }

  getitems() {
    this._plantService.getNumberItems()
      .subscribe(data => {
        if (this.estado == false) {
          this.numeroItems = data[0].NUMPLANTAS;
        }
        this.mostrarplantasmotor();
      },
      error => {
        console.error(error);
      });
  }

  mostrarplantasmotor() {
    if (this.estado == false) {

      this._plantService.detailsAll(this.paginaActual, this.elementosPorPagina)
        .subscribe(data => {
          this.plantsmotor = [];
          for (let key$ in data) {
            this.plantsmotor.push(data[key$]);
          }
          console.log(this.plantsmotor);
        },
        error => {
          console.error(error);
        });
    } else {
      // this.searchcontent(this.paginaActual, this.elementosPorPagina);
    }
  }

  resizeCanvas() {
    let canvasEvolver = (<HTMLElement>document.querySelector('.canvasEvolver'));

    let canvas = document.querySelector('canvas');
    canvas.width = canvasEvolver.offsetWidth;
    canvas.height = canvasEvolver.offsetHeight;


    let desvX = (canvas.width - 1200) * 0.0008;
    let desvY = (canvas.height - 974) * 0.00072;
    let pos = motor.getPosCamaraActiva();
    //motor.moverCamaraA("camara2", 0, pos[1]+(-100*desvY), 0);
    motor.getCamaraActiva().entity.setParams(-1 - desvX, 1 + desvX, -0.7 - desvY, 0.7 + desvY, 1, 1000);

  }

  isDragging(){
    return false;
  }

  inicializar(){
    new iniciar("detail", this.garden);
    let width = (<HTMLElement>document.querySelector(".canvasEvolver")).offsetWidth;
    let height = (<HTMLElement>document.querySelector(".canvasEvolver")).offsetHeight;
    let canvas = document.querySelector('canvas');
    canvas.width = width;
    canvas.height = height;

    let desvX = (canvas.width - 1200) * 0.0008;
    let desvY = (canvas.height - 974) * 0.00072;
    motor.getCamaraActiva().entity.setParams(-1 - desvX, 1 + desvX, -0.7 - desvY, 0.7 + desvY, 1, 1000);
    motor.moverCamaraA("camara2", 0, (100 * -desvY), 0);
    window.addEventListener("resize", this.resizeCanvas);
  }


  ngOnInit() {
    this.accion='Editar';
    this.ActualizarPagina();
    this.firstgarden();
    this.mostrar();
    this.mostrarPlantas();

  }

}
