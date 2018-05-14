import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Product } from "../classes/product.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class ProductService {
	public apiURL: string = "";

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


	detailsAll(page: number, items: number) {
		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`
		});
		return this.http.get(this.apiURL + "admin/products" + "/" + items + "/" + page + "/asc", { headers })
			.map(res => {
				return res.json();
			})
	}

	save(product: Product) {
		let body = `name=${product.name}&type=${product.type}&description=${product.description}`;
		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		});

		return this.http.post(this.apiURL + "admin/product", body, { headers })
			.map(res => {
				return res.json();
			})
	}

	modify(product: Product) {
		let body = `name=${product.name}&description=${product.description}`;
		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		return this.http.put(this.apiURL + "admin/product/" + product.id, body, { headers })
			.map(res => {
				return res.json();
			})
	}

	searchAll(product: Product, page: number, items: number) {
		let body = `name=${product.name}`;
		body += `&description=${product.description}`;
		body += `&type=${product.type}`;

		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		return this.http.post(this.apiURL + "find/Product/" + items + "/" + page + "/name/ASC", body, { headers })
			.map(res => {
				return res.json();
			})
	}

	getNumberItems() {
		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`
		});
		return this.http.get(this.apiURL + "/admin/numProducts", { headers })
			.map(res => {
				return res.json();
			})
	}

	deleteProduct(idProduct: number) {
		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`
		});
		return this.http.delete(this.apiURL + "admin/product/" + idProduct, { headers })
			.map(res => {
				return res.json();
			})
	}

	details(numproduct: number) {
		let headers = new Headers({
			'Authorization': `Bearer ${localStorage['Bearer']}`
		});

		return this.http.get(this.apiURL + "product/" + numproduct, { headers })
			.map(res => {
				return res.json();
			})
	}

}
