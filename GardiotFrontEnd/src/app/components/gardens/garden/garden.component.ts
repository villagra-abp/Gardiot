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
  prevDia3 = [];
  prevDia4 = [];
  prevDia5 = [];

  fotoHoy = "default";
  fotoMan = "default";
  fotoDia3 = "default";
  fotoDia4 = "default";
  fotoDia5 = "default";

  colorHoy = "#fcfcfc";
  colorMan = "#fcfcfc";
  colorDia3 = "#fcfcfc";
  colorDia4 = "#fcfcfc";
  colorDia5 = "#fcfcfc";

  maxMan = 0;
  maxDia3 = 0;
  maxDia4 = 0;
  maxDia5 = 0;

  minMan = 0;
  minDia3 = 0;
  minDia4 = 0;
  minDia5 = 0;

  nombreDia3 = "";
  nombreDia4 = "";
  nombreDia5 = "";

  tercerDia:string = "";
  visible = false;

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
            if(this.garden.city){
              this.visible = true;
              this.getTiempo();
              this.getPrevision();
            }else{
              this.visible = false;
            }
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
           var auxDia3 = [];
           var auxDia4 = [];
           var auxDia5 = [];
           for(var i = 0; i<data.list.length; i++){
             date.setTime(data.list[i].dt * 1000);
             if(date.getDate() == todayDay){
               auxToday.push(data.list[i]);
             }
             if(date.getDate() == todayDay + 1){
               auxTomorrow.push(data.list[i]);
             }
             if(date.getDate() == todayDay + 2){
               auxDia3.push(data.list[i]);

               this.nombreDia3 = this.diaSemana(date.getDay() - 1);
             }
             if(date.getDate() == todayDay + 3){
               auxDia4.push(data.list[i]);
               this.nombreDia4 = this.diaSemana(date.getDay() - 1);
             }
             if(date.getDate() == todayDay + 4){
               auxDia5.push(data.list[i]);
               this.nombreDia5 = this.diaSemana(date.getDay() - 1);
             }
           }
           this.prevHoy=auxToday;
           this.prevMan=auxTomorrow;
           this.prevDia3=auxDia3;
           this.prevDia4=auxDia4;
           this.prevDia5=auxDia5;

           this.fotoHoy = this.prevHoy[0].weather[0].icon;
           this.fotoMan = this.prevMan[4].weather[0].icon;
           this.fotoDia3 = this.prevDia3[4].weather[0].icon;
           this.fotoDia4 = this.prevDia4[4].weather[0].icon;
           this.fotoDia5 = this.prevDia5[4].weather[0].icon;

           this.ordenarTemperatura();
          },
        error => {
          console.error(error);
         // localStorage.clear();
         // sessionStorage.clear();
         // this._route.navigate(['/login']);
        });
  }

  ordenarTemperatura(){
     var auxTemp:number[] = [];
     var auxNum = 0;
     for(var i=0; i<this.prevMan.length; i++){
       auxNum = this.prevMan[i].main.temp -273;
       auxTemp.push(auxNum);
     }
     this.maxMan = Math.max(...auxTemp);
     this.minMan = Math.min(...auxTemp);
     this.colorMan = this.colorTemperatura(this.maxMan);
     auxTemp = [];
     auxNum = 0;

     for(var i=0; i<this.prevDia3.length; i++){
       auxNum = this.prevDia3[i].main.temp -273;
       auxTemp.push(auxNum);
     }
     this.maxDia3 = Math.max(...auxTemp);
     this.minDia3 = Math.min(...auxTemp);
     this.colorDia3 = this.colorTemperatura(this.maxDia3);
     auxTemp = [];
     auxNum = 0;


     for(var i=0; i<this.prevDia4.length; i++){
       auxNum = this.prevDia4[i].main.temp -273;
       auxTemp.push(auxNum);
     }
     this.maxDia4 = Math.max(...auxTemp);
     this.minDia4 = Math.min(...auxTemp);
     this.colorDia4 = this.colorTemperatura(this.maxDia4);
     auxTemp = [];
     auxNum = 0;

     for(var i=0; i<this.prevDia5.length; i++){
       auxNum = this.prevDia5[i].main.temp -273;
       auxTemp.push(auxNum);
     }
     this.maxDia5 = Math.max(...auxTemp);
     this.minDia5 = Math.min(...auxTemp);
     this.colorDia5 = this.colorTemperatura(this.maxDia5);

     auxTemp = [];
     auxNum = 0;


  }

  colorTemperatura(temp){
    var color = "#fcfcfc";
    if(temp<10){
      color = "#99c0ff"
    }
    if(temp>=10 && temp<=20){
      color = "#ffee99"
    }
    if(temp>20 && temp<=30){
      color = "#ffe45e"
    }
    if(temp>30){
      color = "#ff9999"
    }
    return color;
  }

  diaSemana(num){
    var dia = "";
    if(num==-1){
      num = 6;
    }
    switch(num%7){
            case 0:
              dia = "Lunes";
              break;
            case 1:
              dia = "Martes";
              break;
            case 2:
              dia = "Miércoles";
              break;
            case 3:
              dia = "Jueves";
              break;
            case 4:
              dia = "Viernes";
              break;
            case 5:
              dia = "Sabado";
              break;
            case 6:
              dia = "Domingo";
              break;
           }
           return dia;
  }
  
  inicializar(){
    new iniciar("detail");
  }




}
