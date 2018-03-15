import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AppComponent } from "../../../app.component";
import { Treatment } from "../../../classes/treatment.class";
import { TreatmentService } from "../../../services/treatment.service";
import { TreatmentPlant } from "../../../classes/treatmentplant.class";
import { TreatmentPlantService } from "../../../services/treatmentplant.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-newtreatmentsplants',
  templateUrl: './newtreatmentsplants.component.html',
  styleUrls: ['./newtreatmentsplants.component.css']
})
export class NewtreatmentsplantsComponent implements OnInit {

  private treatmentPlant=new TreatmentPlant();
  private treatments:any[]=[];
  private treatmentsPlants:any[]=[];
  private idPlant:number;

  constructor(
    private _treatmentService:TreatmentService,
    private _treatmentPlantService:TreatmentPlantService,
    private _appComponent:AppComponent,
    private _router: ActivatedRoute,
    private _route:Router
  ) { }

  guardar(){
    this._treatmentPlantService.save(this.treatmentPlant,this.idPlant)
        .subscribe(data=>{
            this._appComponent.mensajeEmergente("La planta se ha guardado", "primary", "plants?pag=1");
        },
        error=>{
          let v=JSON.parse(error._body);
          this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
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
      this.getID();
  }
}
