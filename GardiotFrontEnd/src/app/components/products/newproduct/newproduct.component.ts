import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { NgForm } from "@angular/forms";
import { ProductService } from "../../../services/product.service";
import { Product } from "../../../classes/product.class";


@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  product=new Product();
  private products:any[]=[];

  constructor(
    private _productService:ProductService,
    private _appComponent:AppComponent,
  ) { }

  guardar(){
    this._productService.save(this.product)
        .subscribe(data=>{
            this._appComponent.mensajeEmergente("El producto se ha guardado", "primary", "admin/products?pag=1");
        },
        error=>{
          let v=JSON.parse(error._body);
          this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
  }


  ngOnInit() {
  }

}
