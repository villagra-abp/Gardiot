import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from "@angular/http";
import { Plant } from "../classes/plant.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class PlantService {
	private apiURL:string="";
	//public isAdmin:boolean;
	//public isAuthenticated:boolean;

  constructor( private http:Http, private _route:Router) {
	    if(window.location.toString().indexOf("localhost")>=0){
	      this.apiURL="http://localhost:3000/api/";
	    }
	    else if(window.location.toString().indexOf("gardiot")>=0){
	      this.apiURL="https://gardiot.ovh/api/";
	    }
	  }

		save( plant:Plant ){
      let body = `commonName=${plant.commonName}&scientificName=${plant.scientificName}`;
      body+= `&description=${plant.description}&family=${plant.family}&depth=${plant.depth}`;
			body+= `&initDatePlant=${plant.initDatePlant}&finDatePlant=${plant.finDatePlant}`;
			body+= `&initDateBloom=${plant.initDateBloom}&finDateBloom=${plant.finDateBloom}`;
			body+= `&initDateHarvert=${plant.initDateHarvert}&finDateHarvest=${plant.finDateHarvest}`;
			body+= `&distance=${plant.distance}&disease=${plant.disease}`;

      console.log(body);
      let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });

      return this.http.post(this.apiURL+"admin/plant", body, { headers } )
          .map( res=>{
            return res.json();
          })
    }






	  details(){
	  	let headers = new Headers({
        	'Authorization':`Bearer ${localStorage['Bearer']}`
      	});

      	return this.http.get(this.apiURL+"plant/6", { headers } )
          .map( res =>{
            return res.json();
          })
	  }
}
