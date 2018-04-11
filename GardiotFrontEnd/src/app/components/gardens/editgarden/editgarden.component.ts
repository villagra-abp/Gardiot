import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { GardenService } from "../../../services/garden.service";
import { Garden } from "../../../classes/garden.class";
import { AppComponent } from "../../../app.component";
import { Observable } from 'rxjs/Observable';
import { Select2OptionData } from 'ng2-select2';
import 'rxjs/add/operator/delay';
declare var iniciar:any;
declare var motor:any;

@Component({
  selector: 'app-editgarden',
  templateUrl: './editgarden.component.html',
  styleUrls: ['./editgarden.component.css']
})

export class EditGardenComponent implements OnInit{

	garden = new Garden("");
  countries:any[] = [];
  cities:any[] = [];
  zip:string = "";
  countryData: Observable<Array<Select2OptionData>>;
  startCountry: Observable<string>;
  cityData: Observable<Array<Select2OptionData>>;
  startCity: Observable<string>;

  canvasVisible = true;


	 constructor(
	    private _gardenService:GardenService,
	    private _route:Router,
	    private _appComponent:AppComponent){ }

   @HostListener('document:keyup', ['$event'])

   searchZip(event: KeyboardEvent): void {
      //aqui vamos cargando las posibles ciudades a elegir
      let input=(<HTMLInputElement>document.querySelector("#zipCode"));
      if(input.value.length==5){
          this._gardenService.listCitiesByZip(this.garden.countryCode, input.value)
            .subscribe(data=> {
              let sp=document.querySelector('#ciudad');
              console.log(data);

              if(data.length>0){
                this.garden.latitude=data[0].lat.toFixed(2);
                this.garden.longitude=data[0].lng.toFixed(2);
                if(data[0].adminName3!==undefined){
                  this.garden.city=data[0].adminName3;
                  sp.innerHTML=data[0].adminName3;
                }
                else if(data[0].adminName2!==undefined){
                  this.garden.city=data[0].adminName2;
                  sp.innerHTML=data[0].adminName2;
                }
                else if(data[0].adminName1!==undefined){
                  this.garden.city=data[0].adminName1;
                  sp.innerHTML=data[0].adminName1;
                }
                else{
                  this.garden.city='';
                  sp.innerHTML='Código postal no encontrado';
                }
              }
              else{
                this.garden.city='';
                sp.innerHTML='Código postal no encontrado';
              }
              input.value='';
              console.log(this.garden);

            },
            error => {
              console.log(error);
            });
          }
        }

        listarPaises() {
          this._gardenService.listCoutries()
            .subscribe(data=> {
              console.log(data.geonames);
              let aux=[];
              aux.push({id:0, text:"Selecciona un país"});
              for(let i=0; i<data.geonames.length; i++){
                aux.push({id:data.geonames[i].countryCode, text:data.geonames[i].countryName});
              }



              this.countryData=Observable.create((obs)=>{
                    obs.next(aux);
                    obs.complete();
              });
              this.startCountry=Observable.create((obs)=>{
                    obs.next(this.garden.countryCode);
                    obs.complete();
              }).delay(1000);


            },
            error => {
              console.log(error);
            });

        }


  mostrarCiudad(){

      let aux=[];
      aux.push({id:this.garden.city, text:this.garden.city});

      this.cityData=Observable.create((obs)=>{
          obs.next(aux);
          obs.complete();
      });

      document.querySelector('#ciudad').innerHTML=this.garden.city;

  }





	mostrar(){
	this._gardenService.details()
        .subscribe(data=>{
          if(data!=null){
            console.log(data);
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
            this.inicializar();
            //new iniciar("edit", this.garden);
            this.listarPaises();
            this.mostrarCiudad();
          }else{
            this._route.navigate(['/newgarden']);
          }
        },
      error => {
        console.error(JSON.parse(error._body).Mensaje);
        this._route.navigate(['/detail']);
      });

  }

  delete(){
    this._gardenService.deleteGarden(this.garden)
        .subscribe(data=>{
          this._appComponent.mensajeEmergente("Borrado", "success", "detail");
        },
      error => {
        let v=JSON.parse(error._body);
        this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
      });
  }

  ngOnInit(){
  	this.mostrar();
  }

  resizeCanvas(){
    let canvasEvolver=(<HTMLElement>document.querySelector('.canvasEvolver'));

    let canvas=document.querySelector('canvas');
    canvas.width=canvasEvolver.offsetWidth;
    canvas.height=canvasEvolver.offsetHeight;


    let desvX=(canvas.width-1200)*0.0008;
    let desvY=(canvas.height-974)*0.00072;
    let pos=motor.getPosCamaraActiva();
    console.log(pos);
    //motor.moverCamaraA("camara2", 0, pos[1]+(-100*desvY), 0);
    motor.getCamaraActiva().entity.setParams(-1-desvX, 1+desvX, -0.7-desvY, 0.7+desvY, 1, 1000);

  }

  //muestra el formulario de edicion y borrado de jardín
  showForm(){
    if(this.canvasVisible == true){
      this.canvasVisible = false;
    }else{
      this.canvasVisible = true;
    }
  }

	//Envia los nuevos datos del jardin a  a GardenService para guardarlos
  edit(){

    this._gardenService.modifyGarden(this.garden)
        .subscribe(data=>{
          this._appComponent.mensajeEmergente("Datos modificados", "success", "garden");
        },
      error => {
        let v=JSON.parse(error._body);
        this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
      });
  }

  saveCountry(e){
  console.log("save country "+e.value);
    if(e.value!=0 && e.value!==undefined){
      this.garden.countryCode=e.value;
    }
  }

  saveCity(e){
    console.log("save city "+e.value);
    if(e.value!=0 && e.value!==undefined){
      this.garden.city=e.value;
      this.mostrarCiudad();
    }
  }

  inicializar(){
    new iniciar("edit", this.garden);
    let width=(<HTMLElement>document.querySelector(".canvasEvolver")).offsetWidth;
    let height=(<HTMLElement>document.querySelector(".canvasEvolver")).offsetHeight;
    let canvas=document.querySelector('canvas');
    canvas.width=width;
    canvas.height=height;

    let desvX=(canvas.width-1200)*0.0008;
    let desvY=(canvas.height-974)*0.00072;
    motor.getCamaraActiva().entity.setParams(-1-desvX, 1+desvX, -0.7-desvY, 0.7+desvY, 1, 1000);
    motor.moverCamaraA("camara2", 0, (100*-desvY), 0);
    window.addEventListener("resize", this.resizeCanvas);
  }


}
