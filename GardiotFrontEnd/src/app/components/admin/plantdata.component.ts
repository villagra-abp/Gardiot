import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { PlantService } from "../../services/plant.service";
import { Plant } from "../../classes/plant.class";
import { Family } from "../../classes/family.class";
import { AppComponent } from "../../app.component";


@Component({
  selector: 'app-plantdata',
  templateUrl: './plantdata.component.html'

})
export class PlantdataComponent implements OnInit {
  plant=new Plant("");
  private plants:any[]=[];
  private families:any[];

  constructor(
    private _plantService:PlantService,
    private _route:Router,
    private _appComponent:AppComponent
    ) { }

    guardar(){
      console.log(this.plant);
      this._plantService.save(this.plant)
          .subscribe(data=>{

              this._appComponent.mensajeEmergente("La planta se ha guardado", "primary", "admin/plantdata");

          },
          error=>{
            let v=JSON.parse(error._body);
            console.log(v.Mensaje);
            this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
          });
    }


    mostrar(){
      this._plantService.detailsAll()
          .subscribe(data=>{
            for(let key$ in data){
              this.plants.push(data[key$]);
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
