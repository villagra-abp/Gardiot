import { Component, OnInit } from '@angular/core';
import { Plant } from "../../classes/plant.class";
import { Router } from "@angular/router";
import { PlantService } from "../../services/plant.service";


@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  plant = new Plant("");

  constructor(
    private _plantService:PlantService) {}

    mostrar(){
      this._plantService.details()
            .subscribe(data=>{
              this.plant.id=data[0].id;
              this.plant.commonName=data[0].scientificName;
              this.plant.scientificName=data[0].commonName;
              this.plant.description=data[0].description;
              this.plant.photo=data[0].photo;
              // this.plant.photo=data[0].3DModel;
              this.plant.family=data[0].family;
              this.plant.depth=data[0].depth;
              this.plant.distance=data[0].distance;
              this.plant.diseaseResist=data[0].diseaseResist;

              this.plant.initDatePlant=data[0].initDatePlan;
              this.plant.finDatePlant=data[0].finDatePlant;
              this.plant.initDateBloom=data[0].initDateBloom;
              this.plant.finDateBloom=data[0].finDateBloom;
              this.plant.initDateHarvest=data[0].initDateHarvert;
              this.plant.finDateHarvest=data[0].finDateHarvest;

              this.plant.leaveType=data[0].leaveType;

              // this.plant.commonName=data[0].photo;
              // this.plant.commonName=data[0].3DModel;

            },
          error => {
            console.error(JSON.parse(error._body).Mensaje);

          });

    }

  ngOnInit() {
    this.mostrar();

  }

}
