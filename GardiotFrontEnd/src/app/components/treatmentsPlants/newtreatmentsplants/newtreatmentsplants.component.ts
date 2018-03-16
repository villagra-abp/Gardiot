import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AppComponent } from "../../../app.component";
import { Treatment } from "../../../classes/treatment.class";
import { TreatmentService } from "../../../services/treatment.service";
import { Product } from "../../../classes/product.class";
import { ProductService } from "../../../services/product.service";
import { TreatmentPlant } from "../../../classes/treatmentplant.class";
import { ProductTreatment } from "../../../classes/producttreatment.class";
import { TreatmentPlantService } from "../../../services/treatmentplant.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-newtreatmentsplants',
  templateUrl: './newtreatmentsplants.component.html',
  styleUrls: ['./newtreatmentsplants.component.css']
})
export class NewtreatmentsplantsComponent implements OnInit {

  private treatmentPlant=new TreatmentPlant();
  private productTreatment=new ProductTreatment();
  private treatments:any[]=[];
  private products:any[]=[];
  private treatmentsPlants:any[]=[];
  private idPlant:number;

  constructor(
    private _treatmentService:TreatmentService,
    private _productService:ProductService,
    private _treatmentPlantService:TreatmentPlantService,
    private _appComponent:AppComponent,
    private _router: ActivatedRoute,
    private _route:Router
  ) { }

  guardar(){
    console.log(this.treatmentPlant.treatment);
    console.log(this.productTreatment);
    console.log(this.productTreatment.product);
    this._treatmentPlantService.savetreatment(this.treatmentPlant,this.idPlant)
        .subscribe(data=>{
            this._appComponent.mensajeEmergente("El tratamiento y los productos se han guardado", "primary", "plants?pag=1");
        },
        error=>{
          let v=JSON.parse(error._body);
          this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
        if(this.productTreatment.product.length!=undefined){
          for(let cont=0; cont<this.productTreatment.product.length; cont++){
            this._treatmentPlantService.saveproduct(this.treatmentPlant.treatment,this.productTreatment.product[cont],this.idPlant)
                .subscribe(data=>{
                },
                error=>{
                  let v=JSON.parse(error._body);
                });
          }
        }
  }

  mostrarTratamientos(){
    this._treatmentService.detailsAll(1,10000)
        .subscribe(data=>{
          for(let key$ in data){
            this.treatments.push(data[key$]);
          }
        },
      error => {
        console.error(error);
      });
    }

    mostrarProductos(){
      this._productService.detailsAll(1,10000)
          .subscribe(data=>{
            for(let key$ in data){
              this.products.push(data[key$]);
            }
          },
        error => {
          console.error(error);
        });
      }

    getID(){
      this._router.params.subscribe(params => {
        if(params['id']!=null){
          this.idPlant=params['id'];
        }else{
          this._route.navigate(['/plants']);
        }
      });
    }

  ngOnInit() {
      this.mostrarTratamientos();
      this.mostrarProductos();
      this.getID();
  }
}
