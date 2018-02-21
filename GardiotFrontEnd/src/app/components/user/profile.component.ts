import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { UserService} from "../../services/user.service";
import { User } from "../../classes/user.class";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit{
  user=new User("");
  countries:any[] = [];
  cities:any[] = [];
  selected:string = "";
  imgUrl:string='https://gardiot.ovh/uploads/avatar/';

  constructor(
    private _detailService:UserService,
    private _route:Router,
    private _appComponent:AppComponent){ }

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
          console.log(this.user.birthDate);
        },
      error => {
        console.error(error);
        localStorage.clear();
        sessionStorage.clear();
        this._route.navigate(['/login']);
      });
}


    ngOnInit() {
      this.mostrar();

    }

    }
