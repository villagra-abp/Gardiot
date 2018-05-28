import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../../services/feed.service';
import { Feed } from "../../../classes/feed.class";
import { RouterLink, ActivatedRoute, Params } from '@angular/router';
import { DialogDeleteComponent } from '../../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-listfeed',
  templateUrl: './listfeed.component.html',
  styleUrls: ['./listfeed.component.css']
})
export class ListfeedComponent implements OnInit {

  public feeds: any[] = [];
  public feed = new Feed();
  public numeroItems: number;
  public paginaActual: number = 1;
  public elementosPorPagina: number = 4;
  public estado: boolean = false;// false es listado y true buscador

  constructor(
    public _feedService: FeedService,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  mostrar() {
    this.estado=false;
    if (this.estado == false) {
      this._feedService.detailsAll(this.paginaActual, this.elementosPorPagina)
        .subscribe(data => {
          this.feeds = [];
          for (let key$ in data) {
            this.feeds.push(data[key$]);
          }
        },
          error => {
            console.error(error);
          });
    } else {
      //  this.searchcontent(this.paginaActual,this.elementosPorPagina);
    }
  }
  ActualizarPagina() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.paginaActual = params['pag'];
      this.getitems();
    });
  }

  getitems() {
    this._feedService.getNumberItems()
      .subscribe(data => {
        if (this.estado == false) {
          this.numeroItems = data[0].NUMFEEDS;
        }
        this.mostrar();
      },
        error => {
          console.error(error);
        });
  }

  delete(idProduct: number) {
    this._feedService.deleteFeed(idProduct)
      .subscribe(data => {
        this.ActualizarPagina();
      },
        error => {
          console.error(error);
        });
  }

  searchcontent(page: number, items: number) {
    this._feedService.searchAll(this.feed, page, items)
      .subscribe(data => {
        if (data[0] != undefined) {
          this.feeds = [];
          this.numeroItems = data[0].num;
          if (this.estado == false) {
            this.paginaActual = 1;
            this.estado = true;
          }
          for (let key$ in data) {
            this.feeds.push(data[key$]);
          }
        } else {
          this.feeds = [];
          this.numeroItems = 0;
          this.paginaActual = 1;
        }
      },
        error => {
          console.error(error);
        });
  }

  clear() {
    this.feed = new Feed();
  }

  openDialog(id: number, tipo: number) {
    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '40em',
      data: { idObject: id, typeObject: tipo }
    });
  }


  ngOnInit() {
    this.ActualizarPagina();
  }
}
