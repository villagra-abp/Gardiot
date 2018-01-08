import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from "@angular/http";
import { User } from "../interfaces/user.interface";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class UserService {

  private apiURL:string="http://localhost:3000/api/";

  constructor( private http:Http, private _route:Router) {}

    register( user:User ){
      let body = `id=${user.id}&password=${user.password}`;
      let headers = new Headers({
        'Content-Type':'application/x-www-form-urlencoded'
      });

      return this.http.post(this.apiURL+"register", body, { headers } )
          .map( res=>{
            if(res.json().Mensaje=="Insertado"){
              console.log(`Usuario ${user.id} insertado`);
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
              console.log(`Usuario ${user.id} logueado`);
              if(user.id=="luisb_herr@hotmail.com"){
                sessionStorage['nombre']="Luis";
              }
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
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
      });

      return this.http.get(this.apiURL+"auth/google", { headers } )
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

    modifyUserProfile(user:User, oldPassword:string){
      let body = `name=${user.name}&birthdate=${user.birthDate}&password=${user.password}`;
      //body+=`&oldPassword=${oldPassword}`;
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });
      return this.http.put(this.apiURL+"user", body, { headers })
          .map( res =>{
            return res.json();
          })
    }

    public isAuthenticated(): boolean{
      if(localStorage['Bearer']!=null){
        return true;
      }
      return false;
    }

    public isAdmin(): boolean{//comprobar si el usuario es administrador
      if(sessionStorage['nombre']=="Luis"){
        return true;
      }
      return false;
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
