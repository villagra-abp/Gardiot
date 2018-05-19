import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Garden } from "../classes/garden.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class GardenService {

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

  details() {
    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`
    });

    return this.http.get(this.apiURL + "gardenByUser", { headers })
      .map(res => {
        return res.json();
      })
  }

  getGardens(){
    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`
    });

    return this.http.get(this.apiURL + "gardens/9/1", { headers })
      .map(res => {
        return res.json();
      });
  }

  firstgarden() {
    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`
    });

    return this.http.get(this.apiURL + "firstgardenByUser", { headers })
      .map(res => {
        return res.json();
      })
  }

  deleteGarden(garden: Garden) {
    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.delete(this.apiURL + "garden/" + garden.id, { headers })
      .map(res => {
        return res.json();
      })
  }

  insertGarden(garden: Garden) {
    console.log(garden);
    garden.soil = "1";

    let body = `title=${garden.title}`;
    if (garden.width != undefined) {
      body += `&width=${(garden.width * 2) + 1}`;
    }
    if (garden.length != undefined) {
      body += `&length=${(garden.length * 2) + 1}`;
    }
    if (garden.latitude != undefined) {
      body += `&latitude=${garden.latitude}`;
    }
    if (garden.longitude != undefined) {
      body += `&longitude=${garden.longitude}`;
    }
    if (garden.soil != undefined) {
      body += `&soil=${garden.soil}`;
    }
    if (garden.countryCode != undefined) {
      body += `&countryCode=${garden.countryCode}`;
    }
    if (garden.city != undefined) {
      body += `&city=${garden.city}`;
    }

    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post(this.apiURL + "garden", body, { headers })
      .map(res => {
        return res.json();
      })
  }

  saveplants(plant: number, X: number, garden: number, fecha_actual: string) {
    let body = `plant=${plant}&xCoordinate=${X}&yCoordinate=${0}&seed=${fecha_actual}&soil=${1}`;
    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post(this.apiURL + "myPlant/" + garden, body, { headers })
      .map(res => {
        return res.json();
      })

  }


  modifyGarden(garden: Garden, width: number, length: number) {
    garden.soil = "1";
    let body = `id=${garden.id}`;

    if (garden.title !== undefined) {
      body += `&title=${garden.title}`;
    }
    if (garden.width !== undefined) {
      body += `&width=${width}`;
    }
    if (garden.length !== undefined) {
      body += `&length=${length}`;
    }
    if (garden.latitude !== undefined) {
      body += `&latitude=${garden.latitude}`;
    }
    if (garden.longitude !== undefined) {
      body += `&longitude=${garden.longitude}`;
    }
    if (garden.soil !== undefined) {
      //body += `&soil=${garden.soil}`;
    }
    if (garden.countryCode !== undefined) {
      body += `&countryCode=${garden.countryCode}`;
    }
    if (garden.city !== undefined) {
      body += `&city=${garden.city}`;
    }
    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    console.log(body);
    return this.http.put(this.apiURL + "garden/" + garden.id, body, { headers })
      .map(res => {
        return res.json();
      })

  }


  modifyGarden2(garden: Garden) {
    
    let body = `id=${garden.id}&title=${garden.title}&width=${garden.width}&length=${garden.length}&latitude=${garden.latitude}`;
    body += `&longitude=${garden.longitude}&countryCode=${garden.countryCode}&city=${garden.city}`;
    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    console.log(body);
    return this.http.put(this.apiURL + "garden/" + garden.id, body, { headers })
      .map(res => {
        return res.json();
      })

  }



  tiempo(garden: Garden) {
    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`
    });
    return this.http.get(this.apiURL + "weatherCity/" + garden.city + "/" + garden.countryCode, { headers })
      .map(res => {
        return res.json();
      })
  }

  prevision(garden: Garden) {
    let headers = new Headers({
      'Authorization': `Bearer ${localStorage['Bearer']}`
    });
    return this.http.get(this.apiURL + "forecastCity/" + garden.city + "/" + garden.countryCode, { headers })
      .map(res => {
        return res.json();
      })
  }

  listCoutries() {
    return this.http.get(this.apiURL + "geonamesAllCountries")
      .map(res => {
        return res.json();
      })
  }

  listCities(value: string) {
    return this.http.get(this.apiURL + "geonamesCities/" + value)
      .map(res => {
        return res.json();
      })
  }

  listCitiesByZip(country: string, value: string) {
    return this.http.get(this.apiURL + "geonamesSearchByZip/" + value + "/" + country)
      .map(res => {
        return res.json();
      })
  }



}
