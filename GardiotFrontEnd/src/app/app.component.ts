import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  admin:boolean=window.location.href.indexOf('admin')>=0;

  mensajeEmergente(msg:String, tipo:String, link:String){
    let backdiv=document.createElement("div");
    let div=document.createElement("div");
    div.className=`alert alert-${tipo} msg`;
    div.setAttribute("role", "alert");
    if(link==""){
      div.innerHTML=`${msg}<button onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);" class="btn btn-info">Aceptar</button>`;
    }
    else{
      div.innerHTML=`${msg}<button onclick='location.href="http://localhost:4200/${link}"' class="btn btn-info">Aceptar</button>`;
    }
    backdiv.appendChild(div);
    document.querySelector("body").appendChild(backdiv);
  }
}
