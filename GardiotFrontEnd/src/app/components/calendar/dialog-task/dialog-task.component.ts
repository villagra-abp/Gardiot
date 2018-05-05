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

  private nameTreatment = new Treatment();
  private plant = new Plant();
  private product = new Product();

  constructor(
    public thisDialogRef: MatDialogRef<DialogTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _treatmentService: TreatmentService,
    private _plantService: PlantService,
    private _treatmentPlantService: TreatmentPlantService,


  ) { }
  // {mPlant: task.mPlant,myPlant:task.myPlant,tPlant:task.tPlant,treatmentPlant:task.treatmentPlant}
  mostrar(){
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
    this._treatmentPlantService.showProductPlant(this.data.treatmentPlant,this.data.mPlant)
      .subscribe(data => {
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

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }

  ngOnInit() {
    this.mostrar();
  }
}
