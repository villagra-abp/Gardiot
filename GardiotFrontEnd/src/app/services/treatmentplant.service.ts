import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from "@angular/http";
import { TreatmentPlant } from "../classes/treatmentplant.class";
import { ProductTreatment } from "../classes/producttreatment.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class TreatmentPlantService {
  public apiURL:string="";

  constructor( private http:Http, private _route:Router) {
      if(window.location.toString().indexOf("localhost")>=0){
        this.apiURL="http://localhost:3000/api/";
      }
      else if(window.location.toString().indexOf("gardiot")>=0){
        this.apiURL="https://gardiot.ovh/api/";
      }
    }

    savetreatment( treatmentPlant:TreatmentPlant,idPlant:number ){
      console.log(treatmentPlant);
      let body = `plant=${idPlant}&treatment=${treatmentPlant.treatment}`;
          body += `&frequency=${treatmentPlant.frequency}&initDate=${treatmentPlant.initDate}`;
          body += `&finalDate=${treatmentPlant.finalDate}`;
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });
      return this.http.post(this.apiURL+"admin/treatmentPlant", body, { headers } )
          .map( res=>{
            return res.json();
          })
    }

    saveproduct( treatment:number, product:number,idPlant:number ){

      let body = `plant=${idPlant}&treatment=${treatment}&product=${product}`;
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });
      return this.http.post(this.apiURL+"admin/productTreatment", body, { headers } )
          .map( res=>{
            return res.json();
          })

    }

}
