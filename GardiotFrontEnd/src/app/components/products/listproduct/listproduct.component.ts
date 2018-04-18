import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from "../../../classes/product.class";
import { RouterLink,ActivatedRoute, Params } from '@angular/router';
import { DialogDeleteComponent } from '../../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  private products:any[]=[];
  private product=new Product();
  private numeroItems:number;
  private paginaActual:number=1;
  private elementosPorPagina:number=4;
  private estado:boolean=false;// false es listado y true buscador
  dialogResult = "";

  constructor(
    private _productService:ProductService,
    private activatedRoute: ActivatedRoute,
    public dialog:MatDialog,
  ) { }

  mostrar(){
    if(this.estado==false){
      this._productService.detailsAll(this.paginaActual,this.elementosPorPagina)
          .subscribe(data=>{
            this.products=[];
            for(let key$ in data){
              this.products.push(data[key$]);
            }
          },
        error => {
          console.error(error);
        });
    }else{
    this.searchcontent(this.paginaActual,this.elementosPorPagina);
    }
  }
  ActualizarPagina(){
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.paginaActual = params['pag'];
        this.getitems();
      });
 }

 getitems(){
   this._productService.getNumberItems()
   .subscribe(data=>{
     if(this.estado==false){
       this.numeroItems=data[0].NUMPRODUCTS;
     }
     this.mostrar();
   },
   error => {
     console.error(error);
   });
 }


  delete(idProduct:number){
    this._productService.deleteProduct(idProduct)
    .subscribe(data=>{
      this.ActualizarPagina();
    },
    error => {
      console.error(error);
    });
  }

  searchcontent(page:number, items:number){
    this._productService.searchAll(this.product,page,items)
    .subscribe(data=>{
      if(data[0]!=undefined){
        this.products=[];
        this.numeroItems=data[0].num;
        if(this.estado==false){
          this.paginaActual=1;
          this.estado=true;
        }
        for(let key$ in data){
          this.products.push(data[key$]);
        }
      }
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
    // dialogRef.afterClosed().subscribe(result=> {
    //   console.log(`Dialog closed: ${result}`);
    //   this.dialogResult = result;
    // })
  }

  ngOnInit() {
    this.ActualizarPagina();
  }

}
