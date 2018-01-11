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
    if(link==""){
      div.innerHTML=`${msg}<a onclick="this.parentNode.parentNode.removeChild(this.parentNode);" class="btn btn-info" role="button">Aceptar</a>`;
    }
    else{
      div.innerHTML=`${msg}<a href="https://gardiot.ovh/dist/${link}" class="btn btn-info" role="button">Aceptar</a>`;
    }
    document.querySelector("body").appendChild(div);
  }
}
