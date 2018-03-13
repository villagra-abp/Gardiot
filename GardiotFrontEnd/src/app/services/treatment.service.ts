import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from "@angular/http";
import { Treatment } from "../classes/treatment.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class TreatmentService {
	public apiURL:string="";

  constructor( private http:Http, private _route:Router) {
	    if(window.location.toString().indexOf("localhost")>=0){
	      this.apiURL="http://localhost:3000/api/";
	    }
	    else if(window.location.toString().indexOf("gardiot")>=0){
	      this.apiURL="https://gardiot.ovh/api/";
	    }
	  }

		save( treatment:Treatment ){
			let body = `name=${treatment.name}&description=${treatment.description}`;
			let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`,
				'Content-Type':'application/x-www-form-urlencoded'
			});
			return this.http.post(this.apiURL+"admin/treatment", body, { headers } )
					.map( res=>{
						return res.json();
					})
		}

		detailsAll(page:number, items:number){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`
      });
      return this.http.get(this.apiURL+"admin/treatments"+"/"+items+"/"+page+"/asc", { headers } )
          .map( res =>{
            return res.json();
          })
    }


	  // details(numplant:number){
	  // 	let headers = new Headers({
    //     	'Authorization':`Bearer ${localStorage['Bearer']}`
    //   	});
		//
    //   	return this.http.get(this.apiURL+"plant/"+numplant, { headers } )
    //       .map( res =>{
    //         return res.json();
    //       })
	  // }

		// searchAll(treatment:Treatment,page:number, items:number){
		// 	let body = `commonName=${treatment.id}`;
    //   let headers = new Headers({
    //     'Authorization':`Bearer ${localStorage['Bearer']}`,
		// 		'Content-Type':'application/x-www-form-urlencoded'
    //   });
    //   return this.http.post(this.apiURL+"find/Plant/"+items+"/"+page+"/commonName/ASC", body,  { headers } )
    //       .map( res =>{
    //         return res.json();
    //       })
    // }

		// getNumberItems(){
		// 	let headers = new Headers({
		// 		'Authorization':`Bearer ${localStorage['Bearer']}`
		// 	});
		// 	return this.http.get(this.apiURL+"numPlants/", { headers } )
		// 			.map( res =>{
		// 				return res.json();
		// 			})
		// }

		// deletePlant(idPlant: number){
		// 	let headers = new Headers({
		// 		'Authorization':`Bearer ${localStorage['Bearer']}`
		// 	});
		// 	return this.http.delete(this.apiURL+"admin/plant/"+ idPlant, { headers } )
		// 			.map( res =>{
		// 				return res.json();
		// 			})
		// }



}
