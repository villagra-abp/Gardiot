import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { NgForm } from "@angular/forms";
import { ProductService } from "../../../services/product.service";
import { Product } from "../../../classes/product.class";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  product = new Product();
  public products: any[] = [];
  constructor(
    public _productService: ProductService,
    public _appComponent: AppComponent,
    public _router: ActivatedRoute,
    public _route: Router,
  ) { }

  guardar() {
    this._productService.modify(this.product)
      .subscribe(data => {
        this._appComponent.mensajeEmergente("El producto se ha modificado", "primary", "admin/products?pag=1");
      },
      error => {
        let v = JSON.parse(error._body);
        this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
      });
  }

  getID() {
    this._router.params.subscribe(params => {
      if (params['id'] != null) {
        this.product = new Product(params['id']);
        this.mostrar(this.product.id);
      } else {
        this._route.navigate(['/treatments']);
      }
    });
  }

  mostrar(idTreatment: number) {
    this._productService.details(idTreatment)
      .subscribe(data => {
        this.product.id = idTreatment;
        this.product.name = data[0].name;
        this.product.type = data[0].type;
        this.product.description = data[0].description;
      },
      error => {
        console.error(error);
        localStorage.clear();
        sessionStorage.clear();
      });

  }

  ngOnInit() {
    this.getID();
  }
}
