import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public url:string="";

  constructor(){
    if(window.location.toString().indexOf("localhost")>=0){
      this.url="http://localhost:4200/";
    }
    else if(window.location.toString().indexOf("gardiot")>=0){
      this.url="https://gardiot.ovh/app/";
    }
  }
  admin:boolean=window.location.href.indexOf('admin')>=0;

  mensajeEmergente(msg:String, tipo:String, link:String){
    let backdiv=document.createElement("div");
    backdiv.className="background";
    let div=document.createElement("div");
    div.className=`alert alert-${tipo} msg`;
    div.setAttribute("role", "alert");
    if(link==""){
      div.innerHTML=`${msg}<button onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);" class="btn btn-info">Aceptar</button>`;
    }
    else{
      div.innerHTML=`${msg}<button onclick='location.href="${this.url+link}"' class="btn btn-info">Aceptar</button>`;
    }
    backdiv.appendChild(div);
    document.querySelector("body").appendChild(backdiv);
  }
}
