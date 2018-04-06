import { Component} from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { GardenService} from "../../../services/garden.service";
import { Garden } from "../../../classes/garden.class";
import { AppComponent } from "../../../app.component";
import { Observable } from 'rxjs/Observable';
declare var iniciar:any;

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent {
	garden = new Garden("");

	cielo: string = "Cargando" ;
  temperatura = "Cargando";
  humedad = "Cargando";
  presion ="Cargando";
  viento = "Cargando";
  angulo = "0";

  constructor(
  	private _gardenService:GardenService,
  	private _route:Router,
    private _appComponent:AppComponent) { }


  ngOnInit() {
  	this.mostrar();
    this.inicializar();
  }


  mostrar(){
	 this._gardenService.details()
        .subscribe(data=>{
          if(data!=null){
            this.garden.id=data.id;
            this.garden.title=data.title;
            this.garden.width=data.width;
            this.garden.length=data.length;
            this.garden.longitude=data.longitude;
            this.garden.latitude=data.latitude;
            this.garden.soil=data.soil;
            this.garden.user=data.user;
            this.garden.countryCode=data.countryCode;
            this.garden.city=data.city;
            this.garden.plants=data.plants;
            this.getTiempo();
          }else{
            this._route.navigate(['/newgarden']);
          }
        },
      error => {
        console.error(JSON.parse(error._body).Mensaje);
        if(JSON.parse(error._body).Mensaje == 'No existe'){
          this._route.navigate(['/newgarden']);
        }else{
          this._route.navigate(['/detail']);
        }

      });

  }

  getTiempo(){
  	this._gardenService.tiempo(this.garden)
	        .subscribe(data=>{
		  		this.cielo = data.weather[0].main;
          var aux = data.main.temp - 273;
          this.temperatura = aux.toFixed(2);
          this.humedad = data.main.humidity;
          this.presion =  data.main.pressure;
          this.viento = data.wind.speed;

          new iniciar("detail", this.garden);


	        },
	      error => {
	        console.error(error);
	        localStorage.clear();
	        sessionStorage.clear();
	        this._route.navigate(['/login']);
	      });
  }

  inicializar(){
    //new iniciar("detail");
  }




}
