import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from "@angular/http";
import { Feed } from "../classes/feed.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class FeedService {
	public apiURL:string="";

  constructor( private http:Http, private _route:Router) {
	    if(window.location.toString().indexOf("localhost")>=0){
	      this.apiURL="http://localhost:3000/api/";
	    }
	    else if(window.location.toString().indexOf("gardiot")>=0){
	      this.apiURL="https://gardiot.ovh/api/";
	    }
	  }


		detailsAll(page:number, items:number){
			let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`
			});
			return this.http.get(this.apiURL+"admin/feed"+"/"+items+"/"+page+"/asc", { headers } )
					.map( res =>{
						return res.json();
					})
		}

		save( feed:Feed ){
			let body = `name=${feed.name}&text=${feed.text}&dateInit=${feed.dateInit}&dateFinal=${feed.dateFinal}`;
			let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`,
				'Content-Type':'application/x-www-form-urlencoded'
			});
			return this.http.post(this.apiURL+"admin/feed", body, { headers } )
					.map( res=>{
						return res.json();
					})
		}

		// modify( feed:Feed ){
		// 	let body = `name=${product.name}&description=${product.description}`;
		// 	let headers = new Headers({
		// 		'Authorization':`Bearer ${localStorage['Bearer']}`,
		// 		'Content-Type':'application/x-www-form-urlencoded'
		// 	});
		// 	return this.http.put(this.apiURL+"admin/product/"+ product.id , body, { headers } )
		// 			.map( res=>{
		// 				return res.json();
		// 			})
		// }

		getNumberItems(){
			let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`
			});
			return this.http.get(this.apiURL+"/admin/numProducts", { headers } )
					.map( res =>{
						return res.json();
					})
		}

		deleteProduct(idProduct: number){
			let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`
			});
			return this.http.delete(this.apiURL+"admin/product/"+ idProduct, { headers } )
					.map( res =>{
						return res.json();
					})
		}

		details(numproduct:number){
			let headers = new Headers({
					'Authorization':`Bearer ${localStorage['Bearer']}`
				});

				return this.http.get(this.apiURL+"product/"+numproduct, { headers } )
					.map( res =>{
						return res.json();
					})
		}

}
