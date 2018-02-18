import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from "@angular/http";
import { Garden } from "../classes/garden.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class GardenService {

	private apiURL:string="";


	  constructor( private http:Http, private _route:Router) {
	    if(window.location.toString().indexOf("localhost")>=0){
	      this.apiURL="http://localhost:3000/api/";
	    }
	    else if(window.location.toString().indexOf("gardiot")>=0){
	      this.apiURL="https://gardiot.ovh/api/";
	    }
	  }

	  details(){
	  	let headers = new Headers({
        	'Authorization':`Bearer ${localStorage['Bearer']}`
      	});

      	return this.http.get(this.apiURL+"gardenByUser/", { headers } )
          .map( res =>{
            return res.json();
          })
	  }

	  tiempo(garden:Garden){
	  	let headers = new Headers({
        	'Authorization':`Bearer ${localStorage['Bearer']}`
      	});
	  	console.log("garden:"+garden.city);
      	return this.http.get(this.apiURL+"weatherCity/"+ garden.city+ "/"+ garden.countryCode, { headers } )
          .map( res =>{
            return res.json();
          })
	  }



}
