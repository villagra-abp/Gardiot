import { Component, OnInit } from '@angular/core';
import { Plant } from "../../../classes/plant.class";
import { Router, ActivatedRoute } from "@angular/router";
import { PlantService } from "../../../services/plant.service";

import { UserService } from '../../../services/user.service';
import { TreatmentPlantService } from "../../../services/treatmentplant.service";
import { Treatment } from "../../../classes/treatment.class";
import { Product } from "../../../classes/product.class";
import { ProductTreatment } from "../../../classes/producttreatment.class";


@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  private plant = new Plant();
  private product = new Product();
  private treatment = new Treatment();
  private treatments: any[] = [];
  private products: any[] = [];
  private productTreatments: any[] = [];

  private producttreatment = new ProductTreatment();

  private iniSiembra: String;
  private finSiembra: String;
  private iniFlores: String;
  private finFlores: String;
  private iniRecolectar: String;
  private finRecolectar: String;

  mes: String;

  constructor(
    private _plantService: PlantService,
    private _treatmentPlantService: TreatmentPlantService,
    private _router: ActivatedRoute,
    private user: UserService,
    private _route: Router) { }

  mostrar(numplant: number) {
    this._plantService.details(numplant)
      .subscribe(data => {
        this.plant.id = data[0].id;
        this.plant.commonName = data[0].commonName;
        this.plant.scientificName = data[0].scientificName;
        this.plant.description = data[0].description;
        this.plant.photo = data[0].photo;
        // this.plant.photo=data[0].3DModel;
        this.plant.family = data[0].name;
        this.plant.depth = data[0].depth;
        this.plant.distance = data[0].distance;
        this.plant.diseaseResist = data[0].diseaseResist;

        //this.plant.initDatePlant=data[0].initDatePlant;
        this.iniSiembra = this.dameMes(data[0].initDatePlant);
        //this.plant.finDatePlant=data[0].finDatePlant;
        this.finSiembra = this.dameMes(data[0].finDatePlant);
        //this.plant.initDateBloom=data[0].initDateBloom;
        this.iniFlores = this.dameMes(data[0].initDateBloom);
        //this.plant.finDateBloom=data[0].finDateBloom;
        this.finFlores = this.dameMes(data[0].finDateBloom);
        //this.plant.initDateHarvest=data[0].initDateHarvest;
        this.iniRecolectar = this.dameMes(data[0].initDateHarvest);
        //this.plant.finDateHarvest=data[0].finDateHarvest;
        this.finRecolectar = this.dameMes(data[0].finDateHarvest);

        this.plant.leaveType = data[0].leaveType;
        // this.plant.commonName=data[0].3DModel;


      },
      error => {
        console.error(JSON.parse(error._body).Mensaje);

      });

  }
  mostrarTratamientos(numplant: number) {
    // console.log("Entro en mostrar tratamientos de planta: "+numplant);
    this._treatmentPlantService.detailsTreatment(numplant)
      .subscribe(data => {
        this.treatments = [];
        for (let key$ in data) {
          this.treatments.push(data[key$]);
          this.showProductPlant(data[key$].id, numplant);
        }
      },
      error => {
        console.error(JSON.parse(error._body).Mensaje);

      });

  }
  showProductPlant(treatment: number, idPlant: number) {
    this._treatmentPlantService.showProductPlant(treatment, idPlant)
      .subscribe(data => {
        // this.productTreatments=[];
        for (let key$ in data) {
          this.productTreatments.push(data[key$]);
        }
        console.log(this.productTreatments);
      },
      error => {
        console.error(JSON.parse(error._body).Mensaje);

      });

  }

  dameMes(fechas) {
    if (fechas != null) {
      var fecha = fechas;
      var array = fecha.toString();
      var arrayRoto = array.split("-");
      this.mes = arrayRoto[1];

      switch (this.mes) {
        case '01': this.mes = "Enero";
          break;
        case '02': this.mes = "Febrero";
          break;
        case '03': this.mes = "Marzo";
          break;
        case '04': this.mes = "Abril";
          break;
        case '05': this.mes = "Mayo";
          break;
        case '06': this.mes = "Junio";
          break;
        case '07': this.mes = "Julio";
          break;
        case '08': this.mes = "Agosto";
          break;
        case '09': this.mes = "Septiembre";
          break;
        case '10': this.mes = "Octubre";
          break;
        case '11': this.mes = "Noviembre";
          break;
        case '12': this.mes = "Diciembre";
          break;
      }
    }
    return this.mes;
  }
  comprobaciones() {
    if (this.user.isUserAuthenticated()) {
      this.user.isAuthenticated = this.user.isUserAuthenticated();
      this.user.isUserAdmin().subscribe(data => {
        if (data) {
          this.user.isAdmin = true;
        }
        else {
          this.user.isAdmin = false;
        }
      }, error => {
        this.user.isAdmin = false;
      });
    }
    else {
      this.user.isAdmin = false;
    }
  }

  ngOnInit() {

    this._router.params.subscribe(params => {
      if (params['id'] != null) {
        this.plant = new Plant(params['id']);
        this.mostrar(this.plant.id);
        // llamo a mostrarTratamientos y le paso el id de la planta
        // this.treatment=new Treatment(params['id']);
        this.mostrarTratamientos(this.plant.id);

      } else {
        this._route.navigate(['/library']);
      }
    });


  }
}
