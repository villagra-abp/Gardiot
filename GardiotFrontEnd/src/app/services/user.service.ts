import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from "@angular/http";
import { User } from "../interfaces/user.interface";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class UserService {

  private apiURL:string="https://gardiot.ovh/api/";

  constructor( private http:Http, private _route:Router) {}

    registro( user:User ){
      let body = `id=${user.id}&password=${user.password}`;
      let headers = new Headers({
        'Content-Type':'application/x-www-form-urlencoded'
      });

      return this.http.post(this.apiURL+"register", body, { headers } )
          .map( res=>{
            if(res.json().Mensaje=="Insertado"){
              alert(`Usuario ${user.id} insertado`);
            }
            return res.json();
          })
    }

    login( user:User ){
      let body = `id=${user.id}&password=${user.password}`;
      let headers = new Headers({
        'Content-Type':'application/x-www-form-urlencoded'
      });

      return this.http.post(this.apiURL+"authenticate", body, { headers } )
          .map( res=>{
            if(res.json().Token!=null){
              alert(`Usuario ${user.id} logueado`);
              localStorage.setItem('Bearer', res.json().Token);
              console.log(res.json().Token);
            }
            else{
              console.log("Token es null");
              console.log(res.json());
            }

            return res.json();
          })
    }
    loginGoogle(){

      return this.http.get(this.apiURL+"auth/google")
          .map( res =>{
            return res.json();
          })
    }

    details(user:User){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`
      });

      return this.http.get(this.apiURL+"user", { headers } )
          .map( res =>{
            return res.json();
          })
    }

    detailsAll(){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`
      });

      return this.http.get(this.apiURL+"users", { headers } )
          .map( res =>{
            return res.json();
          })
    }

    modifyUserProfile(user:User){
      let body = `name=${user.name}&birthdate=${user.birthDate}&password=${user.password}`;
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });
      return this.http.put(this.apiURL+"user", body, { headers })
          .map( res =>{
            return res.json();
          })
    }



    logout(){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });
      return this.http.get(this.apiURL+"logout", { headers })
        .map(res=>{
          return res.json();
        })
    }

}
