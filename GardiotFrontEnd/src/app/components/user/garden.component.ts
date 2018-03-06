import { Component} from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { GardenService} from "../../services/garden.service";
import { Garden } from "../../classes/garden.class";
import { AppComponent } from "../../app.component";
import { Observable } from 'rxjs/Observable';
declare var mat4:any;
declare var TGestorRecursos:any;
declare var TMotor:any;

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html'
})
export class GardenComponent {
	garden = new Garden("");

	cielo: string = "Cargando" ;
  temperatura = "Cargando";
  humedad = "Cargando";
  presion ="Cargando";
  viento = "Cargando";
  angulo = "0";
  canvas;
  motor=new TMotor();
  gestor=new TGestorRecursos();

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
          this.garden.id=data[0].id;
          this.garden.title=data[0].title;
          this.garden.width=data[0].width;
          this.garden.length=data[0].lenght;
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
	          console.log(data);


		  		this.cielo = data.weather[0].main;
          var aux = data.main.temp - 273;
          this.temperatura = aux.toFixed(2);
          this.humedad = data.main.humidity;
          this.presion =  data.main.pressure;
          this.viento = data.wind.speed;


	        },
	      error => {
	        console.error(error);
	        localStorage.clear();
	        sessionStorage.clear();
	        this._route.navigate(['/login']);
	      });
  }

  inicializar(){
        this.canvas=null;
        window.motor=this.motor;
        window.gestor=this.gestor;
        window.matrixProjection=[];
        window.matrixStack=[];
        window.matrixModel=mat4.create();

        matrixStack.push(matrixModel);

        //inicializamos vector de texturas
        window.textureImage=[];
        //variable que tendrá el programa webgl
        window.gl=null;


        this.motor.crearNodoLuz("luz1", false, undefined);

        this.motor.crearNodoCamara("camara1", true, undefined);




        this.motor.crearNodoMalla("malla2", "cubo", undefined);




        this.motor.moverMalla("malla2", 0, -20, 0);
        this.motor.rotarMalla("malla2", 45, "y");
        this.motor.escalarMalla("malla2", 50, 1, 50);


        this.motor.moverLuz("luz1", -10, 25, 7);






        this.motor.moverCamara("camara1", 0, 5, 25);
        this.motor.rotarCamara("camara1", -20, "x");

        this.motor.activarCamara("camara1");

        this.motor.activarLuz("luz1");



        //plantas
        this.motor.crearNodoMalla("maceta1", "maceta", undefined);
        this.motor.crearNodoMalla("maceta2", "maceta", undefined);
        for(let i=0; i<6; i++){
            for(let j=0; j<4; j++){
                this.motor.crearNodoMalla("calabaza"+i+"-"+j, "calabaza", undefined);
                this.motor.escalarMalla("calabaza"+i+"-"+j, 3, 3, 3);
                this.motor.moverMalla("calabaza"+i+"-"+j, -30+(i*10), -15, -20+(j*10));

            }
        }


        this.motor.moverMalla("maceta1", 6, -18, -35);
        this.motor.moverMalla("maceta2", -10, -18, -35);


        //declaramos las variables necesarias para ejecutar el programa
        //las variables de WebGL empezarán siempre por gl para distinguirlas de
        //las variables del motor gráfico
        window.glVertexShader=null;
        window.glFragmentShader=null;
        window.glProgram=null;


        //CARLOS, TRATA DE ARRANCARLO (WEBGL)
        this.motor.draw();
  }


}
