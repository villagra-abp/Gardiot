import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from "@angular/http";
import { User } from "../classes/user.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class TaskService {

  public apiURL:string="";
  public isAdmin:boolean;
  public isAuthenticated:boolean;

  constructor( private http:Http, private _route:Router) {
    if(window.location.toString().indexOf("localhost")>=0){
      this.apiURL="http://localhost:3000/api/";
    }
    else if(window.location.toString().indexOf("gardiot")>=0){
      this.apiURL="https://gardiot.ovh/api/";
    }
  }


  detailsAll(fecha_actual:string){
    let headers = new Headers({
      'Authorization':`Bearer ${localStorage['Bearer']}`
    });
    return this.http.get(this.apiURL+"monthTask/"+ fecha_actual, { headers } )
        .map( res =>{
          return res.json();
        })
  }

  moveTask(mPlant:number, myPlant:number, tPlant:number, treatmentPlant:number){
    let headers = new Headers({
      'Authorization':`Bearer ${localStorage['Bearer']}`
    });
    return this.http.put(`${this.apiURL}moveTask/${myPlant}/${mPlant}/${tPlant}/2018-04-01`, { headers } )
        .map( res =>{
          return res.json();
        })
  }

  DoneTask(mPlant:number, myPlant:number, tPlant:number, treatmentPlant:number, date:string){
    let headers = new Headers({
      'Authorization':`Bearer ${localStorage['Bearer']}`
    });
    return this.http.patch(this.apiURL+"taskDone/"+myPlant+"/"+mPlant+"/"+tPlant+"/"+date, { headers } )
        .map( res =>{
          return res.json();
        })
  }
}
