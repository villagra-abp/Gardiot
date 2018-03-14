import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AppComponent } from "../../../app.component";
import { Treatment } from "../../../classes/treatment.class";
import { TreatmentPlant } from "../../../classes/treatmentPlant.class";
import { TreatmentService } from "../../../services/treatment.service";

@Component({
  selector: 'app-treatment-plant',
  templateUrl: './treatmentPlant.component.html',
  styleUrls: ['./treatmentPlant.component.css']
})
export class TreatmentPlantComponent implements OnInit {

  treatmentPlant=new TreatmentPlant();
  private treatments:any[]=[];
  private treatmentsPlants:any[]=[];

  constructor(
    private _treatmentService:TreatmentService,
    private _appComponent:AppComponent,
  ) { }

  // guardar(){
  //   this._treatmentService.savePlant(this.treatmentPlant)
  //       .subscribe(data=>{
  //           this._appComponent.mensajeEmergente("La planta se ha guardado", "primary", "plants?pag=1");
  //       },
  //       error=>{
  //         let v=JSON.parse(error._body);
  //         this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
  //       });
  // }

  mostrarTratamientos(){
    this._treatmentService.detailsAll(1,10000)
        .subscribe(data=>{
                        console.log(data);
          for(let key$ in data){
            this.treatments.push(data[key$]);
          }
        },
      error => {
        console.error(error);
      });
    }

  ngOnInit() {
      this.mostrarTratamientos();
  }

}
