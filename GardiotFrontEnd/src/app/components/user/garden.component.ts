import { Component} from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { GardenService} from "../../services/garden.service";
import { Garden } from "../../classes/garden.class";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html'
})
export class GardenComponent {
	garden = new Garden("");
	tiempo:string = "";
	humedad:string = "";
  constructor(
  	private _gardenService:GardenService,
  	private _route:Router,
    private _appComponent:AppComponent) { }


  ngOnInit() {
  	this.mostrar();

  }


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
          console.log("garden");
          console.log(this.garden);

          this.getTiempo();
        },
      error => {
        console.error(JSON.parse(error._body).Mensaje);
        this._route.navigate(['/detail']);
      });

  }

  getTiempo(){
  	this._gardenService.tiempo(this.garden)
	        .subscribe(data=>{
	          console.log(data);
		  		this.tiempo= data.weather[0].main;
		  		this.humedad= data.main.humidity;

	        },
	      error => {
	        console.error(error);
	        localStorage.clear();
	        sessionStorage.clear();
	        this._route.navigate(['/login']);
	      });
  }
}
