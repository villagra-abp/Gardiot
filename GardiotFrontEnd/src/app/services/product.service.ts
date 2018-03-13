import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from "@angular/http";
import { Product } from "../classes/product.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class ProductService {
	public apiURL:string="";

  constructor( private http:Http, private _route:Router) {
	    if(window.location.toString().indexOf("localhost")>=0){
	      this.apiURL="http://localhost:3000/api/";
	    }
	    else if(window.location.toString().indexOf("gardiot")>=0){
	      this.apiURL="https://gardiot.ovh/api/";
	    }
	  }

}
