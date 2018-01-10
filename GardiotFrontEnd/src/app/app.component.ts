import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  admin:boolean=window.location.href.indexOf('admin')>=0;

  mensajeEmergente(msg:String, tipo:String, link:String){
    let div=document.createElement("div");
    div.className=`alert alert-${tipo} msg`;
    div.setAttribute("role", "alert");
    div.innerHTML=`${msg}<a href="http://localhost:4200/${link}" class="btn btn-info" role="button">Aceptar</a>`;
    document.querySelector("body").appendChild(div);
  }
}
