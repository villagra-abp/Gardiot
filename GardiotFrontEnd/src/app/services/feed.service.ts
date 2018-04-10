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

		modify( feed:Feed ){
			let body = `name=${feed.name}&text=${feed.text}&dateInit=${feed.dateInit}&dateFinal=${feed.dateFinal}`;
			let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`,
				'Content-Type':'application/x-www-form-urlencoded'
			});
			console.log(feed.id);
			return this.http.put(this.apiURL+"admin/feed/"+ feed.id , body, { headers } )
					.map( res=>{
						return res.json();
					})
		}

		getNumberItems(){
			let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`
			});
			return this.http.get(this.apiURL+"/admin/numFeeds", { headers } )
					.map( res =>{
						return res.json();
					})
		}

		deleteProduct(idFeed: number){
			let headers = new Headers({
				'Authorization':`Bearer ${localStorage['Bearer']}`
			});
			return this.http.delete(this.apiURL+"admin/feed/"+ idFeed, { headers } )
					.map( res =>{
						return res.json();
					})
		}

		details(numfeed:number){
			let headers = new Headers({
					'Authorization':`Bearer ${localStorage['Bearer']}`
				});

			return this.http.get(this.apiURL+"admin/feed/"+numfeed, { headers } )
				.map( res =>{
					return res.json();
				})
		}

}
