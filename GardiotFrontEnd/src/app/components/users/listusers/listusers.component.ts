import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../../services/user.service";
import { User } from "../../../classes/user.class";
import { RouterLink, ActivatedRoute, Params } from '@angular/router';
import { DialogDeleteComponent } from '../../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-admin-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: []
})
export class AdminListUsersComponent {

  private users: any[] = [];
  private user = new User();
  private numeroItems: number;
  private paginaActual: number = 1;
  private elementosPorPagina: number = 5;
  private estado: boolean = false;// false es listado y true buscador

  constructor(
    private _detailService: UserService,
    private _route: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
  ) { }


  mostrar() {
    if (this.estado == false) {
      this._detailService.detailsAll(this.paginaActual, this.elementosPorPagina)
        .subscribe(data => {
          this.users = [];
          for (let key$ in data) {
            this.users.push(data[key$]);
          }
        },
        error => {
          console.error(error);
        });
    } else {
      this.searchcontent(this.paginaActual,this.elementosPorPagina);
    }
  }

  deleteuser(idUser: number) {
    this._detailService.deleteUser(idUser)
      .subscribe(data => {
        this.ActualizarPagina();
      },
      error => {
        console.error(error);
      });
  }

  ActualizarPagina() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.paginaActual = params['pag'];
      this.getitems();
    });
  }

  getitems() {
    this._detailService.getNumberItems()
      .subscribe(data => {
        if (this.estado == false) {
          this.numeroItems = data[0].NUMUSERS;
        }
        this.mostrar();
      },
      error => {
        console.error(error);
      });
  }

  searchcontent(page: number, items: number) {
    console.log('blablabla');
    console.log(this.user);
    this._detailService.searchAll(this.user, page, items)
      .subscribe(data => {
        console.log(data);
        if (data[0] != undefined) {
          this.users = [];
          this.numeroItems = data[0].num;
          if (this.estado == false) {
            this.paginaActual = 1;
            this.estado = true;
          }
          for (let key$ in data) {
            this.users.push(data[key$]);
          }
        }else{
          this.users = [];
          this.numeroItems = 0;
          this.paginaActual = 1;
        }
      },
      error => {
        console.error(error);
      });
  }
  openDialog(id: number, tipo: number) {
    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '600px',
      data: { idObject: id, typeObject: tipo }
    });
  }

  ngOnInit() {
    this.ActualizarPagina();
  }

}
