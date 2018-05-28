import { Component, OnInit } from '@angular/core';
import { Plant } from "../../../classes/plant.class";
import { Router, ActivatedRoute } from "@angular/router";
import { PlantService } from "../../../services/plant.service";
import { UserService } from '../../../services/user.service';
import { TreatmentPlantService } from "../../../services/treatmentplant.service";
import { Treatment } from "../../../classes/treatment.class";
import { Product } from "../../../classes/product.class";
import { ProductTreatment } from "../../../classes/producttreatment.class";
import { MatExpansionModule } from '@angular/material/expansion';
import { DialogDeleteComponent } from '../../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  public plant = new Plant();
  public product = new Product();
  public treatment = new Treatment();
  public treatments: any[] = [];
  public products: any[] = [];
  public productTreatments: any[] = [];
  public producttreatment = new ProductTreatment();
  public iniSiembra: String;
  public finSiembra: String;
  public iniFlores: String;
  public finFlores: String;
  public iniRecolectar: String;
  public finRecolectar: String;
  public mes: String;
  public haytratamiento: number=1;

  constructor(
    public _plantService: PlantService,
    public _treatmentPlantService: TreatmentPlantService,
    public _router: ActivatedRoute,
    public user: UserService,
    public dialog: MatDialog,
    public _route: Router) { }


  mostrar(numplant: number) {
    this._plantService.details(numplant)
      .subscribe(data => {
        this.plant.id = data[0].id;
        this.plant.commonName = data[0].commonName;
        this.plant.scientificName = data[0].scientificName;
        this.plant.description = data[0].description;
        this.plant.photo = data[0].photo;
        this.plant.family = data[0].name;
        this.plant.depth = data[0].depth;
        this.plant.distance = data[0].distance;
        this.plant.diseaseResist = data[0].diseaseResist;
        this.iniSiembra = this.dameMes(data[0].initDatePlant);
        this.finSiembra = this.dameMes(data[0].finDatePlant);
        this.iniFlores = this.dameMes(data[0].initDateBloom);
        this.finFlores = this.dameMes(data[0].finDateBloom);
        this.iniRecolectar = this.dameMes(data[0].initDateHarvest);
        this.finRecolectar = this.dameMes(data[0].finDateHarvest);
        this.plant.leaveType = data[0].leaveType;
      },
      error => {
        console.error(JSON.parse(error._body).Mensaje);
      });

  }
  mostrarTratamientos(numplant: number) {
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
    this.haytratamiento=0;
    this._treatmentPlantService.showProductPlant(treatment, idPlant)
      .subscribe(data => {
        // //console.log(data);
        if (data.length == 0) {
            // //console.log("No hay");
        }else{
          for (let key$ in data) {
            this.productTreatments.push(data[key$]);
          }
        }
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
          document.querySelector('.evolver').classList.add('vistaAdmin');
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
  contShowPlant(){
    this._plantService.updateViews(this.plant.id).subscribe(data => {
          },
          error => {
            console.error(JSON.parse(error._body).Mensaje);
          });
  }
  openDialog(id: number, tipo: number) {
    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '40em',
      data: { idObject: id, typeObject: tipo }
    });
  }

  ngOnInit() {

    this.comprobaciones();

    this._router.params.subscribe(params => {
      if (params['id'] != null) {
        this.plant = new Plant(params['id']);
        this.mostrar(this.plant.id);
        this.contShowPlant();
        this.mostrarTratamientos(this.plant.id);

      } else {
        this._route.navigate(['/library']);
      }
    });

  }
}
