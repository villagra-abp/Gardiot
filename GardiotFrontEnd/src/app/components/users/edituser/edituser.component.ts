import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from '../../../services/user.service';
import { User } from '../../../classes/user.class';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './edituser.component.html',
  styles: []
})
export class EdituserComponent implements OnInit {

  oldId:String;
//  user;
  user=new User();
  private users:any[]=[];

  constructor(private _editUserService:UserService,
  private _appComponent:AppComponent,
  private _router: ActivatedRoute,
  private _route:Router ) { }


  guardarUsuario(forma:NgForm){
    console.log(forma.value);
    this._editUserService.modifyUserProfileAdmin(forma.value, this.oldId)
      .subscribe(data=>{
        this._appComponent.mensajeEmergente(data.Mensaje, "primary", "admin/listusers");
      })

  }

  getID(){
    this._router.params.subscribe(params => {
      if(params['id']!=null){
        this.user=new User(params['id']);
        this.mostrar(this.user);
      }else{
        this._route.navigate(['/plants']);
      }
    });
  }

  mostrar(User: User){
    this._editUserService.details(User)
        .subscribe(data=>{
          this.user.id=data[0].id;
          this.user.name=data[0].name;
          this.user.lastName=data[0].lastName;
          this.user.active=data[0].active;
          this.user.admin=data[0].admin;
        },
      error => {
        console.error(error);
        localStorage.clear();
        sessionStorage.clear();
      //  this._route.navigate(['/login']);
      });

    }

  ngOnInit() {
    //Coge el ID por parámetro, entonces carga el usuario para mostrarlo
    this.getID();



    // this._router.params.subscribe(params => {
    //         if(params['id']!=null){
    //           this.user=new User(params['id']);
    //           console.log(this.user);
    //             this._editUserService.details(this.user)
    //             .subscribe(data=>{
    //                 console.log(data);
    //                 this.oldId=data[0].id;
    //                 this.user.name=data[0].name;
    //               },
    //             error => {
    //               this._route.navigate(['/admin/users']);
    //             });
    //         }
    //      });
  }

}
