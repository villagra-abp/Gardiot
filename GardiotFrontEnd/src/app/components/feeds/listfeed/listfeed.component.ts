import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../../services/feed.service';
import { Feed } from "../../../classes/feed.class";
import { RouterLink,ActivatedRoute, Params } from '@angular/router';
import { DialogDeleteComponent } from '../../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-listfeed',
  templateUrl: './listfeed.component.html',
  styleUrls: ['./listfeed.component.css']
})
export class ListfeedComponent implements OnInit {

  private feeds:any[]=[];
  private feed=new Feed();
  private numeroItems:number;
  private paginaActual:number=1;
  private elementosPorPagina:number=4;
  private estado:boolean=false;// false es listado y true buscador

  constructor(
    private _feedService:FeedService,
    private activatedRoute: ActivatedRoute,
    private dialog:MatDialog,
  ) { }

  mostrar(){
    if(this.estado==false){
      this._feedService.detailsAll(this.paginaActual,this.elementosPorPagina)
          .subscribe(data=>{
            this.feeds=[];
            for(let key$ in data){
              this.feeds.push(data[key$]);
            }
          },
        error => {
          console.error(error);
        });
    }else{
    //  this.searchcontent(this.paginaActual,this.elementosPorPagina);
        console.log("assss");
    }
  }
  ActualizarPagina(){
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.paginaActual = params['pag'];
        this.getitems();
      });
 }

 getitems(){
   this._feedService.getNumberItems()
   .subscribe(data=>{
     if(this.estado==false){
       this.numeroItems=data[0].NUMFEEDS;
     }
     this.mostrar();
   },
   error => {
     console.error(error);
   });
 }


  delete(idProduct:number){
    this._feedService.deleteFeed(idProduct)
    .subscribe(data=>{
      this.ActualizarPagina();
    },
    error => {
      console.error(error);
    });
  }

  openDialog(id:number,tipo:number){
    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      width:'600px',
      data:{idObject: id, typeObject: tipo}
    });
  }


  ngOnInit() {
    this.ActualizarPagina();
  }

}
