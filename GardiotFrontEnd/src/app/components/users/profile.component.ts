import { Component} from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { UserService} from "../../services/user.service";
import { User } from "../../classes/user.class";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  user=new User();

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
            this._detailService.modifyUserProfile(this.user)
                .subscribe(data=>{
                  this._appComponent.mensajeEmergente("Datos modificados", "success", "detail");
                },
              error => {
                let v=JSON.parse(error._body);
                this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
              });


      }


  ngOnInit() {

    this.mostrar();
  }


  }
