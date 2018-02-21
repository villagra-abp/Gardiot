import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { UserService} from "../../services/user.service";
import { User } from "../../classes/user.class";
import { AppComponent } from "../../app.component";
import { Observable } from 'rxjs/Observable';
import { Select2OptionData } from 'ng2-select2';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Ng2ImgMaxService} from 'ng2-img-max';
import 'rxjs/add/operator/delay';
declare var $:any;

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['editprofile.component.css']
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
  imgUrl:string='https://gardiot.ovh/api/';

  uploader:FileUploader=new FileUploader({url: 'http://localhost:3000/api/uploadAvatar', itemAlias: 'photo'});


  constructor(
    private _detailService:UserService,
    private _route:Router,
    private _appComponent:AppComponent,
    private _ng2ImgMax:Ng2ImgMaxService){ }

    @HostListener('document:keyup', ['$event'])
    searchZip(event: KeyboardEvent): void {
      //aqui vamos cargando las posibles ciudades a elegir
      let input=(<HTMLInputElement>document.querySelector("#zipCode"));
      if(input.value.length>=5){
          this._detailService.listCitiesByZip(this.user.countryCode, input.value)
            .subscribe(data=> {
              let sp=document.querySelector('#ciudad');
              console.log(data);
              if(data.length>0){
                if(data[0].adminName3!==undefined){
                  this.user.city=data[0].adminName3;
                  sp.innerHTML=data[0].adminName3;
                }
                else if(data[0].adminName2!==undefined){
                  this.user.city=data[0].adminName2;
                  sp.innerHTML=data[0].adminName2;
                }
                else if(data[0].adminName1!==undefined){
                  this.user.city=data[0].adminName1;
                  sp.innerHTML=data[0].adminName1;
                }
                else{
                  this.user.city='';
                  sp.innerHTML='Código postal no encontrado';
                }
              }
              else{
                this.user.city='';
                sp.innerHTML='Código postal no encontrado';
              }
              input.value='';

            },
            error => {
              console.log(error);
            });
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

    this.uploader.onAfterAddingFile = (file)=> {
      file.withCredentials = false;
    };

       this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("ImageUpload:uploaded:", item, status, response);

            let url=response.split(" ");
            url=url[url.length-1];
            url=url.replace("..\\uploads\\avatar\\", "");
            console.log(url);
            this.user.photo=url;
            let img=document.getElementById('photoProfile');
            img.setAttribute('src', this.imgUrl+url);


            console.log(img.getAttribute('src'));
            //cambiamos el atributo this.user.photo y guardamos el formulario
        };

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
        }).delay(1000);


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

      document.querySelector('#ciudad').innerHTML=this.user.city;

  }

  uploadPhoto(event){
    if(this.uploader.getNotUploadedItems().length){
      console.log(event.target.files);
      let file=[];
      file.push(event.target.files[0]);
      file.forEach(function(){
        console.log(file);
      });
      this._ng2ImgMax.compress(file, 1.25).subscribe(
        result=>{
          const newImage=new File([result], result.name);
          this.uploader.clearQueue();
          this.uploader.addToQueue([newImage]);
          this.uploader.uploadAll();
        },
        error=> console.log(error)
      );
    }
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
