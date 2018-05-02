import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from "@angular/http";
import { Plant } from "../classes/plant.class";
import { Family } from "../classes/family.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class PlantService {
	public apiURL:string="";

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
			body+= `&initDateHarvest=${plant.initDateHarvest}&finDateHarvest=${plant.finDateHarvest}`;
			body+= `&distance=${plant.distance}&diseaseResist=${plant.diseaseResist}`;
			body+= `&leaveType=${plant.leaveType}`;
			body+= `&photo=${plant.photo}`;

      let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });

      return this.http.post(this.apiURL+"admin/plant", body, { headers } )
          .map( res=>{
            return res.json();
          })
    }

		modify( plant:Plant ){
			let body = `commonName=${plant.commonName}&scientificName=${plant.scientificName}`;
			body+= `&description=${plant.description}&family=${plant.family}&depth=${plant.depth}`;
			body+= `&initDatePlant=${plant.initDatePlant}&finDatePlant=${plant.finDatePlant}`;
			body+= `&initDateBloom=${plant.initDateBloom}&finDateBloom=${plant.finDateBloom}`;
			body+= `&initDateHarvest=${plant.initDateHarvest}&finDateHarvest=${plant.finDateHarvest}`;
			body+= `&distance=${plant.distance}&diseaseResist=${plant.diseaseResist}`;
			body+= `&leaveType=${plant.leaveType}`;
			body+= `&photo=${plant.photo}`;

			let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`,
				'Content-Type':'application/x-www-form-urlencoded'
			});

			return this.http.put(this.apiURL+"admin/plant/"+ plant.id , body, { headers } )
					.map( res=>{
						return res.json();
					})
		}

		detailsAll(page:number, items:number){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`
      });
      return this.http.get(this.apiURL+"plants"+"/"+items+"/"+page+"/NAME/asc", { headers } )
          .map( res =>{
            return res.json();
          })
    }

		detailsAllFamilies(){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`
      });
      return this.http.get(this.apiURL+"families"+"/100/1/asc", { headers } )
          .map( res =>{
            return res.json();
          })
    }

	  details(numplant:number){
	  	let headers = new Headers({
        	'Authorization':`Bearer ${localStorage['Bearer']}`
      	});

      	return this.http.get(this.apiURL+"plant/"+numplant, { headers } )
          .map( res =>{
            return res.json();
          })
	  }

		searchAll(plant:Plant,page:number, items:number){
			let body = `commonName=${plant.commonName}`;
			body += `&scientificName=${plant.scientificName}`;
			body += `&leaveType=${plant.leaveType}`;
			body += `&initDatePlant=${plant.initDatePlant}`;
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
				'Content-Type':'application/x-www-form-urlencoded'
      });
      return this.http.post(this.apiURL+"find/Plant/"+items+"/"+page+"/commonName/ASC", body,  { headers } )
          .map( res =>{
            return res.json();
          })
    }

		getNumberItems(){
			let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`
			});
			return this.http.get(this.apiURL+"numPlants/", { headers } )
					.map( res =>{
						return res.json();
					})
		}

		updateViews(idPlant: number){
			let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`
			});
				return this.http.get(this.apiURL+"updateViewPlant/" + idPlant , { headers })
					.map( res =>{
						return res.json();
					})
		}

		deletePlant(idPlant: number){
			let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`
			});
			return this.http.delete(this.apiURL+"admin/plant/"+ idPlant, { headers } )
					.map( res =>{
						return res.json();
					})
		}
}
