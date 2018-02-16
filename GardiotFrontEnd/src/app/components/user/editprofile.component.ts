import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { UserService} from "../../services/user.service";
import { User } from "../../classes/user.class";
import { AppComponent } from "../../app.component";
import { Observable } from 'rxjs/Observable';
import { Select2OptionData } from 'ng2-select2';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html'
})
export class EditProfileComponent implements OnInit{
  user=new User("");
  countries:any[] = [];
  cities:any[] = [];
  selected:string = "";
  countryData: Observable<Array<Select2OptionData>>;
  startCountry: Observable<string>;
  cityData: Observable<Array<Select2OptionData>>;
  startCity: Observable<string>;


  constructor(
    private _detailService:UserService,
    private _route:Router,
    private _appComponent:AppComponent){ }

    @HostListener('document:keyup', ['$event'])
    searchZip(event: KeyboardEvent): void {
      //aqui vamos cargando las posibles ciudades a elegir
      console.log(event.key);
    }

    //Cargar usuario para mostrar sus datos en el formulario por defecto
  mostrar(){
    this._detailService.details(this.user)
        .subscribe(data=>{
          this.user.id=data.id;
          this.user.birthDate=data.birthDate;
          this.user.photo=data.photo;
          this.user.name=data.name;
          this.user.lastName=data.lastName;
          this.user.city=data.city;
          this.user.countryCode=data.countryCode;

          this.listarPaises();

        },
      error => {
        console.error(error);
        localStorage.clear();
        sessionStorage.clear();
        this._route.navigate(['/login']);
      });

    }

    //Enviar los nuevos datos del usuario a UserService para guardarlos
    edit(){

      this._detailService.modifyUserProfile(this.user)
          .subscribe(data=>{
            this._appComponent.mensajeEmergente("Datos modificados", "success", "profile");
          },
        error => {
          let v=JSON.parse(error._body);
          this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
      }


  ngOnInit() {
    this.mostrar();

  }

  listarPaises() {
    this._detailService.listCoutries()
      .subscribe(data=> {
        //console.log(data.geonames);
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
              obs.next(this.user.countryCode);
              obs.complete();
        }).delay(2000);


      },
      error => {
        console.log(error);
      });

  }


  listaCiudades(value:string){

    this._detailService.listCities(value)
      .subscribe(data=> {
        console.log(data);

          let aux=[];
          aux.push({id:0, text:"Selecciona una ciudad"});
          for(let i=0; i<data.geonames.length; i++){
            aux.push({id:data.geonames[i].name, text:data.geonames[i].name});
          }



          this.cityData=Observable.create((obs)=>{
                obs.next(aux);
                obs.complete();
          });

          this.startCity=Observable.create((obs)=>{
                obs.next(this.user.city);
                obs.complete();
          });
      },
      error => {
        console.log(error);
      });

  }



//Estas dos funciones son para guardar los datos
//del país y ciudad en el objeto de usuario
  changeCities(e){
    if(e.value!=0 && e.value!==undefined){
      this.user.countryCode=e.value;
      this.listaCiudades(e.value);
    }
  }

  saveCity(e){
    if(e.value!=0 && e.value!==undefined){
      this.user.city=e.value;
    }
  }

  }
