import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user.class';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './edituser.component.html',
  styles: []
})
export class AdminEditUserComponent implements OnInit {

  oldId:String;
  user;

  constructor(private _editUserService:UserService,
  private _appComponent:AppComponent,
  private _router: ActivatedRoute,
  private _route:Router ) { }


  guardarUsuario(forma:NgForm){
    console.log(forma.value);
    this._editUserService.modifyUserProfile(forma.value, this.oldId)
      .subscribe(data=>{
        this._appComponent.mensajeEmergente(data.Mensaje, "primary", "admin/listusers");
      })

  }

  ngOnInit() {
    //Coge el ID por parámetro, entonces carga el usuario para mostrarlo
    this._router.params.subscribe(params => {
            if(params['id']!=null){
              this.user=new User(params['id']);
              console.log(this.user);
                this._editUserService.details(this.user)
                .subscribe(data=>{
                    console.log(data);
                    this.oldId=data[0].id;
                    this.user.name=data[0].name;
                  },
                error => {
                  this._route.navigate(['/admin/listusers']);
                });
            }
         });
  }

}
