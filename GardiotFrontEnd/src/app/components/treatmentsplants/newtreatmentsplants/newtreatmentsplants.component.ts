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
import { PlantService } from "../../../services/plant.service";
import { Plant } from "../../../classes/plant.class";


@Component({
  selector: 'app-newtreatmentsplants',
  templateUrl: './newtreatmentsplants.component.html',
  styleUrls: ['./newtreatmentsplants.component.css']
})
export class NewtreatmentsplantsComponent implements OnInit {

  public treatmentPlant = new TreatmentPlant();
  public productTreatment = new ProductTreatment();
  public treatments: any[] = [];
  public products: any[] = [];
  public treatmentsPlants: any[] = [];
  public idPlant: number;
  public plant = new Plant();

  constructor(
    public _treatmentService: TreatmentService,
    public _productService: ProductService,
    public _plantService: PlantService,
    public _treatmentPlantService: TreatmentPlantService,
    public _appComponent: AppComponent,
    public _router: ActivatedRoute,
    public _route: Router

  ) { }

  guardar() {
    this._treatmentPlantService.savetreatment(this.treatmentPlant, this.idPlant)
      .subscribe(data => {
        this._appComponent.mensajeEmergente(data.Mensaje, "primary", "");
      },
        error => {
          let v = JSON.parse(error._body);
          this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
    for (let cont in this.productTreatment.product) {
      this._treatmentPlantService.saveproduct(this.treatmentPlant.treatment, this.productTreatment.product[cont], this.idPlant)
        .subscribe(data => {
        },
          error => {
            let v = JSON.parse(error._body);
          });
    }
  }

  mostrarTratamientos() {
    this._treatmentService.detailsAll(1, 10000)
      .subscribe(data => {
        for (let key$ in data) {
          this.treatments.push(data[key$]);
        }
      },
        error => {
          console.error(error);
        });
  }

  mostrarProductos() {
    this._productService.detailsAll(1, 10000)
      .subscribe(data => {
        for (let key$ in data) {
          this.products.push(data[key$]);
        }
      },
        error => {
          console.error(error);
        });
  }
  mostrarPlanta(numplant: number) {
    this._plantService.details(numplant)
      .subscribe(data => {
        //console.log(data);
        this.plant.id = data[0].id;
        this.plant.commonName = data[0].commonName;
        this.plant.photo = data[0].photo;
      },
        error => {
          console.error(JSON.parse(error._body).Mensaje);
        });

  }

  getID() {
    this._router.params.subscribe(params => {
      if (params['id'] != null) {
        this.idPlant = params['id'];
      } else {
        this._route.navigate(['/plants']);
      }
    });
  }

  ngOnInit() {
    this.mostrarTratamientos();
    this.mostrarProductos();
    this.getID();
    this.mostrarPlanta(this.idPlant);
  }
}
