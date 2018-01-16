import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user.class';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-user',
  templateUrl: './user.component.html',
  styles: []
})
export class AdminUserComponent implements OnInit {

  user=new User();
  constructor(private _newUserServce:UserService,
  private _appComponent:AppComponent) { }

  guardarUsuario(forma:NgForm){
    console.log(forma.value);
    this._newUserServce.register(forma.value)
      .subscribe(data=>{
        this._appComponent.mensajeEmergente(data.Mensaje, "primary", "/admin");
      })

  }

  ngOnInit() {
  }

}
