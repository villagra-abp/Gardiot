import { Component} from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { UserService} from "../../services/user.service";
import { User } from "../../interfaces/user.interface";

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
    private _route:Router ){ }

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

    edit(user:NgForm){
      let oldPassword, password;
      console.log(user);
      if(user.value.passwordn!=""){
        if(user.value.password1!=""){
          if(user.value.passwordn==user.value.passwordn2){
            oldPassword=user.value.password1;
            password=user.value.passwordn;
          }
          else{
            alert("Las contraseñas no coinciden, la contraseña no se ha guardado");
          }
        }
        else{
          alert("Debes introducir tu contraseña actual para poder cambiar tu contraseña");
        }
      }
      this._detailService.modifyUserProfile(this.user, oldPassword, password)
          .subscribe(data=>{
            alert(data);
          },
        error => {
          console.error(error);
          this._route.navigate(['/login']);
        });
      }


  ngOnInit() {

    this.mostrar();
  }


  }
