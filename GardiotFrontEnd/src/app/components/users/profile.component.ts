import { Component} from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { UserService} from "../../services/user.service";
import { User } from "../../interfaces/user.interface";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user:User={
    id:"",
    name:"",
    password:"",
    password2:"",
    oldPassword:"",
    plan:"",
    birthDate:new Date(),
  }

  constructor(
    private _detailService:UserService,
    private _route:Router,
    private _appComponent:AppComponent){ }

  mostrar(){
    this._detailService.details(this.user)
        .subscribe(data=>{
          console.log(data);
          this.user.id=data.id;
          this.user.birthDate=data.birthDate;
          this.user.plan=data.plan;
          this.user.name=data.name;
        },
      error => {
        console.error(error);
        this._route.navigate(['/login']);
      });
    }

    edit(){
      let oldPassword, password;
      console.log(this.user);
      if(this.user.password!=""){
        if(this.user.oldPassword!=""){
          if(this.user.password==this.user.password2){
            oldPassword=this.user.oldPassword;
            password=this.user.password;
            this._detailService.modifyUserProfile(this.user, oldPassword, password)
                .subscribe(data=>{
                  this._appComponent.mensajeEmergente("Datos modificados", "success", "");
                },
              error => {
                console.error(error);
                this._appComponent.mensajeEmergente(error, "danger", "");
                this._route.navigate(['/login']);
              });
          }
          else{
            this._appComponent.mensajeEmergente("Las contraseñas no coinciden, la contraseña no se ha guardado", "danger", "");
          }
        }
        else{
          this._appComponent.mensajeEmergente("Debes introducir tu contraseña actual para poder cambiar tu contraseña", "warning", "");
        }
      }
      else{
        this._detailService.modifyUserProfile(this.user, oldPassword, password)
            .subscribe(data=>{
              this._appComponent.mensajeEmergente("Datos modificados", "success", "");
            },
          error => {
            console.error(error);
            this._appComponent.mensajeEmergente(error, "danger", "");
          });
      }

      }


  ngOnInit() {

    this.mostrar();
  }


  }
