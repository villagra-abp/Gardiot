import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Treatment } from "../../../classes/treatment.class";
import { Product } from '../../../classes/product.class';
import { Plant } from '../../../classes/plant.class';

import { PlantService } from "../../../services/plant.service";
import { TreatmentService } from "../../../services/treatment.service";
import { TreatmentPlantService } from "../../../services/treatmentplant.service";

@Component({
  selector: 'app-dialog-task',
  templateUrl: './dialog-task.component.html',
  styleUrls: ['./dialog-task.component.css']
})
export class DialogTaskComponent implements OnInit {

  public nameTreatment = new Treatment();
  public plant = new Plant();
  public product = new Product();
  public products: any[] = [];

  constructor(
    public thisDialogRef: MatDialogRef<DialogTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _treatmentService: TreatmentService,
    public _plantService: PlantService,
    public _treatmentPlantService: TreatmentPlantService,


  ) { }

  mostrar() {
    // TRATAMIENTO
    this._treatmentService.details(this.data.treatmentPlant)
      .subscribe(data => {
        if (data[0] !== undefined) {
          this.nameTreatment.name = data[0].name;
          this.nameTreatment.name = data[0].name;
          this.nameTreatment.description = data[0].description;
          this.nameTreatment.icon = data[0].icon;
        }
      },
        error => {
          console.error(error);
        });
    // PLANTA
    this._plantService.details(this.data.mPlant)
      .subscribe(data => {
        this.plant.photo = data[0].photo;
        this.plant.commonName = data[0].commonName;
      },
        error => {
          console.error(error);
        });

    // PRODUCTO
    this._treatmentPlantService.showProductPlant(this.data.treatmentPlant, this.data.mPlant)
      .subscribe(data => {

        this.products = [];
        for (let key$ in data) {
          this.products.push(data[key$]);
        }


        if (data[0] !== undefined) {
          this.product.name = data[0].name;
          this.product.type = data[0].type;
          this.product.description = data[0].description;

        }
      },
        error => {
          console.error(error);
        });
  }

  ngOnInit() {
    this.mostrar();
  }
}
