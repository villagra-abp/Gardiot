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
  selector: 'app-newgarden',
  templateUrl: './newgarden.component.html'
})

export class NewGardenComponent implements OnInit{

	garden = new Garden("");
  countries:any[] = [];
  cities:any[] = [];
  zip:string = "";
  countryData: Observable<Array<Select2OptionData>>;
  startCountry: Observable<string>;
  cityData: Observable<Array<Select2OptionData>>;
  startCity: Observable<string>;



	 constructor(
	    private _gardenService:GardenService,
	    private _route:Router,
	    private _appComponent:AppComponent){ }

   @HostListener('document:keyup', ['$event'])

   searchZip(event: KeyboardEvent): void {
      //aqui vamos cargando las posibles ciudades a elegir
      let input=(<HTMLInputElement>document.querySelector("#zipCode"));
      console.log("city " + this.garden.countryCode);
      if(this.garden.countryCode != undefined){
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
      if(this.garden.city!=undefined)
      document.querySelector('#ciudad').innerHTML=this.garden.city;

  }





	mostrar(){
	this._gardenService.details()
        .subscribe(data=>{
          this._route.navigate(['/garden']);
        },
      error => {
        console.error(JSON.parse(error._body).Mensaje); 
      });

  }
  

  ngOnInit(){
  	this.mostrar();
    //------------------ 
    this.listarPaises();
    this.mostrarCiudad();
  }

	//Envia los nuevos datos del jardin a  a GardenService para guardarlos
  newGarden(){

    this._gardenService.insertGarden(this.garden)
        .subscribe(data=>{
          console.log("entra?");
          this._appComponent.mensajeEmergente("Jardin Creado", "success", "garden");
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


}