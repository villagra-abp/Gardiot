import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { GardenService } from "../../services/garden.service";
import { Garden } from "../../classes/garden.class";
import { AppComponent } from "../../app.component";
import { Observable } from 'rxjs/Observable';
import { Select2OptionData } from 'ng2-select2';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-editgarden',
  templateUrl: './editgarden.component.html'
})

export class EditGardenComponent implements OnInit{

	garden = new Garden("");


	 constructor(
	    private _gardenService:GardenService,
	    private _route:Router,
	    private _appComponent:AppComponent){ }



	mostrar(){
	this._gardenService.details()
        .subscribe(data=>{
          this.garden.id=data[0].id;
          this.garden.title=data[0].title;
          this.garden.width=data[0].width;
          this.garden.lenght=data[0].lenght;
          this.garden.longitude=data[0].longitude;
          this.garden.latitude=data[0].latitude;
          this.garden.soil=data[0].soil;
          this.garden.user=data[0].user;
          this.garden.countryCode=data[0].countryCode;
          this.garden.city=data[0].city;
          
        },
      error => {
        console.error(JSON.parse(error._body).Mensaje);
        this._route.navigate(['/detail']);
      });

  }

  ngOnInit(){
  	this.mostrar();
  }

	//Envia los nuevos datos del jardin a  a GardenService para guardarlos
  edit(){

    this._gardenService.modifyGarden(this.garden)
      /*  .subscribe(data=>{
          this._appComponent.mensajeEmergente("Datos modificados", "success", "profile");
        },
      error => {
        let v=JSON.parse(error._body);
        this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
      });*/
  }


}