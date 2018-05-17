import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { User } from "../classes/user.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class TaskService {

  public apiURL: string = "";
  public isAdmin: boolean;
  public isAuthenticated: boolean;

  constructor(private http: Http, private _route: Router) {
    if (window.location.toString().indexOf("localhost") >= 0) {
      this.apiURL = "http://localhost:3000/api/";
    }
    else if (window.location.toString().indexOf("gardiot") >= 0) {
      this.apiURL = "https://gardiot.ovh/api/";
    }
    else{
      this.apiURL = "http://192.168.100.3:3000/api/";
    }
  }

  detailsSome(number:number){
    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`
    });

    return this.http.get(this.apiURL + "firstTasks/" + number + "/1", { headers })
      .map(res => {
        return res.json();
      })

  }


  detailsAll(fechas: string) {
    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`
    });
    let query='?';
    if(fechas[0]!==undefined){
      query += 'fecha1='+fechas[0]+'&';
    }if(fechas[1]!==undefined){
      query += 'fecha2='+fechas[1]+'&';
    }if(fechas[2]!==undefined){
      query += 'fecha3='+fechas[2]+'&';
    }
    query = query.substring(0, query.length - 1);

    return this.http.get(this.apiURL + "monthTask/"+fechas, { headers })
      .map(res => {
        return res.json();
      })
  }

  moveTask(mPlant: number, myPlant: number, tPlant: number, treatmentPlant: number, oldDate: string, date: string) {
    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`
    });
    return this.http.put(`${this.apiURL}moveTask/${myPlant}/${mPlant}/${tPlant}/${treatmentPlant}/${oldDate}/${date}`, '', { headers })
      .map(res => {
        return res.json();
      })
  }

  DoneTask(mPlant: number, myPlant: number, tPlant: number, treatmentPlant: number, date: string, dateDone: string) {

    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`
    });
    return this.http.put(this.apiURL + "taskDone/" + myPlant + "/" + mPlant + "/" + tPlant + "/" + treatmentPlant + "/" + date + "/" + dateDone, '', { headers })
      .map(res => {
        return res.json();
      })
  }
  undoneTask(mPlant: number, myPlant: number, tPlant: number, treatmentPlant: number, date: string) {

    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`
    });
    return this.http.put(this.apiURL + "taskUndone/" + myPlant + "/" + mPlant + "/" + tPlant + "/" + treatmentPlant + "/" + date, '', { headers })
      .map(res => {
        return res.json();
      })
  }

  percent(){
        let headers = new Headers({
          'Authorization': `Bearer ${localStorage['Bearer']}`
        });
        return this.http.get(this.apiURL + "todayPercent", { headers })
          .map(res => {
            return res.json();
          })
  }
}
