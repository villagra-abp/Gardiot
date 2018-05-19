import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { PlantService } from "../../../services/plant.service";
import { UserService } from '../../../services/user.service';
import { Plant } from "../../../classes/plant.class";
import { Family } from "../../../classes/family.class";
import { RouterLink, ActivatedRoute, Params } from '@angular/router';
import { DialogDeleteComponent } from '../../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Select2OptionData } from 'ng2-select2';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
    styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  public plants: any[] = [];
  public families: any[] = [];
  public plant = new Plant();
  public numeroItems: number;
  public paginaActual: number = 1;
  public elementosPorPagina: number = 6;
  public estado: boolean = false;// false es listado y true buscador
  public familyData: Observable<Array<Select2OptionData>>;
  public startFamily: Observable<string>;

  constructor(
    public _plantService: PlantService,
    public _route: Router,
    public activatedRoute: ActivatedRoute,
    public user: UserService,
    public dialog: MatDialog,
  ) { }

  mostrar() {
    if (this.estado == false) {
      this._plantService.detailsAll(this.paginaActual, this.elementosPorPagina)
        .subscribe(data => {
          this.plants = [];
          for (let key$ in data) {
            this.plants.push(data[key$]);
          }
        },
        error => {
          console.error(error);
        });
    } else {
      this.searchcontent(this.paginaActual, this.elementosPorPagina);
    }
  }

  searchcontent(page: number, items: number) {
    console.log(this.plant);
    this._plantService.searchAll(this.plant, page, items)
      .subscribe(data => {
        if (data[0] != undefined) {
          this.plants = [];
          this.numeroItems = data[0].num;
          if (this.estado == false) {
            this.paginaActual = 1;
            this.estado = true;
          }
          for (let key$ in data) {
            this.plants.push(data[key$]);
          }
        }else{
          this.plants = [];
          this.numeroItems = 0;
          this.paginaActual = 1;
        }
      },
      error => {
        console.error(error);
      });
  }


  deleteplant(idPlant: number) {
    this._plantService.deletePlant(idPlant)
      .subscribe(data => {
        this.ActualizarPagina();
      },
      error => {
        console.error(error);
      });
  }

  getitems() {
    this._plantService.getNumberItems()
      .subscribe(data => {
        if (this.estado == false) {
          this.numeroItems = data[0].NUMPLANTAS;
        }
        this.mostrar();
      },
      error => {
        console.error(error);
      });
  }

  getFamilies(){
    this._plantService.detailsAllFamilies()
      .subscribe(data => {
        let aux = [];
        
        for (let i = 0; i < data.length; i++) {
          aux.push({ id: data[i].id, text: data[i].name });
        }
        this.families = aux;
        console.log(this.families);
        this.familyData = Observable.create((obs) => {
          obs.next(aux);
          obs.complete();
        });




      },
      error => {
        console.error(error);
      });
  }

  saveFamily(e) {
    if (e.value != 0 && e.value !== undefined) {
      this.plant.family = e.value;
    }
  }

  ActualizarPagina() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.paginaActual = params['pag'];
      this.getitems();
    });
  }

  //actualmente no se usa
  ActualizarPagina2() {
    this.activatedRoute.params.subscribe(params => {
      if (params['pag'] != null) {
        this.paginaActual = params['pag'];
      } else {
        this._route.navigate(['/library/1']);
      }
      this.getitems();
    });
  }

  comprobaciones() {
    if (this.user.isUserAuthenticated()) {
      this.user.isAuthenticated = this.user.isUserAuthenticated();
      this.user.isUserAdmin().subscribe(data => {
        if (data) {
          this.user.isAdmin = true;
          document.querySelector('.evolver').classList.add('vistaAdmin');
        }
        else {
          this.user.isAdmin = false;
        }
      }, error => {
        this.user.isAdmin = false;
      });
    }
    else {
      this.user.isAdmin = false;
    }
  }

  openDialog(id: number, tipo: number) {
    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '40em',
      data: { idObject: id, typeObject: tipo }
    });
  }

  ngOnInit() {
    this.comprobaciones();
    this.ActualizarPagina();
    this.getFamilies();

  }

}
