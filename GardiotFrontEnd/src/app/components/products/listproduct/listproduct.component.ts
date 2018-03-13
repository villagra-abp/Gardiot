import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from "../../../classes/product.class";

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
  private elementosPorPagina:number=6;
  private estado:boolean=false;// false es listado y true buscador

  constructor(
    private _productService:ProductService,
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
    //  this.searchcontent(this.paginaActual,this.elementosPorPagina);
    }
  }

  ngOnInit() {

    this.mostrar();
  }

}
