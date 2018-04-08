import { Component} from '@angular/core';
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
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

  prevHoy = [];
  prevMan = [];
  prevPas = [];
  tercerDia:string = "";
  notVisible = false;

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
          console.log(data);
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
            this.getPrevision();
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
          this.temperatura = aux.toFixed(0);
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

  getPrevision(){
    this._gardenService.prevision(this.garden)
          .subscribe(data=>{
           var date = new Date();
           var today = new Date();
           var todayDay= today.getDate();
           var auxToday = [];
           var auxTomorrow = [];
           var auxNext = [];
           for(var i = 0; i<data.list.length; i++){
             date.setTime(data.list[i].dt * 1000);
             if(date.getDate() == todayDay){
               auxToday.push(data.list[i]);
             }
             if(date.getDate() == todayDay + 1){
               auxTomorrow.push(data.list[i]);
             }
             if(date.getDate() == todayDay + 2){
               auxNext.push(data.list[i]);
             }
           }
           console.log(auxToday);
           console.log(auxTomorrow);
           console.log(auxNext);
           this.prevHoy=auxToday;
           this.prevMan=auxTomorrow;
           this.prevPas=auxNext;

           var tercero = date.getDay() + 3;
           switch(tercero%7){
            case 0:
              this.tercerDia = "Lunes";
              break;
            case 1:
              this.tercerDia = "Martes";
              break;
            case 2:
              this.tercerDia = "Miércoles";
              break;
            case 3:
              this.tercerDia = "Jueves";
              break;
            case 4:
              this.tercerDia = "Viernes";
              break;
            case 5:
              this.tercerDia = "Sabado";
              break;
            case 6:
              this.tercerDia = "Domingo";
              break;
           }

          },
        error => {
          console.error(error);
         // localStorage.clear();
         // sessionStorage.clear();
         // this._route.navigate(['/login']);
        });
  }

  mostrarPrevision(){
    console.log(this.notVisible);
    if(this.notVisible == false){
      this.notVisible = true;
    }else{
      this.notVisible = false;
    }
    console.log(this.notVisible);
  }

  inicializar(){
    //new iniciar("detail");
  }




}
