import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Treatment } from "../classes/treatment.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class TreatmentService {
	public apiURL: string = "";

	constructor(public http: Http, public _route: Router) {
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

	save(treatment: Treatment) {
		let body = `name=${treatment.name}&description=${treatment.description}`;
		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		return this.http.post(this.apiURL + "admin/treatment", body, { headers })
			.map(res => {
				return res.json();
			})
	}

	modify(treatment: Treatment) {
		let body = `name=${treatment.name}&description=${treatment.description}`;
		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		return this.http.put(this.apiURL + "admin/treatment/" + treatment.id, body, { headers })
			.map(res => {
				return res.json();
			})
	}


	detailsAll(page: number, items: number) {
		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`
		});
		return this.http.get(this.apiURL + "admin/treatments" + "/" + items + "/" + page + "/asc", { headers })
			.map(res => {
				return res.json();
			})
	}

	searchAll(treatment: Treatment, page: number, items: number) {
		let body = `name=${treatment.name}`;
		body += `&description=${treatment.description}`;

		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		return this.http.post(this.apiURL + "find/Treatment/" + items + "/" + page + "/name/ASC", body, { headers })
			.map(res => {
				return res.json();
			})
	}

	getNumberItems() {
		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`
		});
		return this.http.get(this.apiURL + "/admin/numTreatments", { headers })
			.map(res => {
				return res.json();
			})
	}

	deleteTrearment(idTrearment: number) {
		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`
		});
		return this.http.delete(this.apiURL + "admin/treatment/" + idTrearment, { headers })
			.map(res => {
				return res.json();
			})
	}

	details(numtreatment: number) {
		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`
		});

		return this.http.get(this.apiURL + "treatment/" + numtreatment, { headers })
			.map(res => {
				return res.json();
			})
	}



}
