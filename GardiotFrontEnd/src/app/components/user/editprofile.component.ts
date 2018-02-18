import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { UserService} from "../../services/user.service";
import { User } from "../../classes/user.class";
import { AppComponent } from "../../app.component";
import { Observable } from 'rxjs/Observable';
import { Select2OptionData } from 'ng2-select2';
import 'rxjs/add/operator/delay';
declare var $:any;

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html'
})
export class EditProfileComponent implements OnInit{
  user=new User("");
  countries:any[] = [];
  cities:any[] = [];
  zip:string = "";
  countryData: Observable<Array<Select2OptionData>>;
  startCountry: Observable<string>;
  cityData: Observable<Array<Select2OptionData>>;
  startCity: Observable<string>;
  public options: Select2Options;
  public options2: Select2Options;


  constructor(
    private _detailService:UserService,
    private _route:Router,
    private _appComponent:AppComponent){ }

    @HostListener('document:keyup', ['$event'])
    searchZip(event: KeyboardEvent): void {
      //aqui vamos cargando las posibles ciudades a elegir
      if(document.querySelector("#zipCode > span").classList.contains("select2-container--open")){
        if(document.querySelector("span.select2-search.select2-search--dropdown>input")!=null){
          let code=(<HTMLInputElement>document.querySelector("span.select2-search.select2-search--dropdown>input")).value;
          if(code.length>=3){
            this._detailService.listCitiesByZip(this.user.countryCode, code)
            .subscribe(data=> {

              let tit=document.querySelectorAll(".select2-selection__rendered")[1];
              tit.innerHTML="joder";
              console.log(tit);
              tit.setAttribute('ng-reflect-value', "data[0].adminName3");
              tit.setAttribute('title', '-_-');
              console.log(tit.innerHTML);


              console.log(data);
              let op=document.querySelector("#zipCode > select");
              let li=document.querySelector("span.select2-results>ul");
              op.innerHTML="";
              li.innerHTML="";
              let aux=[];
              for(let i=0; i<1; i++){
                if(i==0){
                  li.innerHTML+=`<li class="select2-results__option select2-results__option--highlighted" role="treeitem" aria-selected="false" data-select2-id="${i}">${data[i].postalCode+"-"+data[i].adminName3}</li>`;
                }
                else{
                  li.innerHTML+=`<li class="select2-results__option" role="treeitem" aria-selected="false" data-select2-id="${i}">${data[i].postalCode+"-"+data[i].adminName3}</li>`;
                }
                op.innerHTML+=`<option value="${data[i].adminName3}" data-select2-id="${i}">${data[i].postalCode+"-"+data[i].adminName3}</option>`;
                aux.push({id:data[i].adminName3, text:data[i].postalCode+"-"+data[i].adminName3});
              }

              let tit=document.querySelectorAll(".select2-selection__rendered")[1];
              tit.innerHTML="joder";
              console.log(tit);
              tit.setAttribute('ng-reflect-value', "tuputamadre");
              tit.setAttribute('title', data[0].adminName3);
              console.log(tit.innerHTML);

              /*this.cityData=Observable.create((obs)=>{
                  obs.next(aux);
                  obs.complete();
              });*/
            },
            error => {
              console.log(error);
            });
          }
        }
      }
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
          this.mostrarCiudad();

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
    this.options={
      selectOnClose: true
    }
    this.options2={
      selectOnClose: true
    }

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


  mostrarCiudad(){

      let aux=[];
      aux.push({id:this.user.city, text:this.user.city});

      this.cityData=Observable.create((obs)=>{
          obs.next(aux);
          obs.complete();
      });

      this.startCity=Observable.create((obs)=>{
          obs.next(this.user.city);
          obs.complete();
      });

  }



//Estas dos funciones son para guardar los datos
//del país y ciudad en el objeto de usuario
  saveCountry(e){
  console.log("save country"+e.value);
    if(e.value!=0 && e.value!==undefined){
      this.user.countryCode=e.value;
    }
  }

  saveCity(e){
    console.log("save city"+e.value);
    if(e.value!=0 && e.value!==undefined){
      this.user.city=e.value;
      this.mostrarCiudad();
    }
  }



}
