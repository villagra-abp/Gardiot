import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from "@angular/http";
import { User } from "../classes/user.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class UserService {

  private apiURL:string="http://localhost:3000/api/"; 
  public isAdmin:boolean;
  public isAuthenticated:boolean;

  constructor( private http:Http, private _route:Router) {}

    register( user:User ){
      let body = `id=${user.id}&password=${user.password}&password2=${user.password2}`;
      if(user.birthDate!=null){
        //body+=`&birthDate=${user.birthDate}`;
      }
      console.log(user);
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
              localStorage.setItem('Bearer', res.json().Token);
            }
            else{
              console.log("Token es null");
              console.log(res.json());
            }

            return res.json();
          })
    }
    loginGoogle(){
      /*let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
      });*/

      return this.http.get(this.apiURL+"auth/google"/*, { headers }*/ )
          .map( res =>{
            return res.json();
          })
    }

    details(user:User){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`
      });

      return this.http.get(this.apiURL+"user/"+user.id, { headers } )
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

    modifyUserProfile(user:User, oldId:String){
      let body = `name=${user.name}`;
      if(user.birthDate!=null){
        //body+=`&birthDate=${user.birthDate}`;
      }
      if(user.oldPassword && user.password){
        body+=`&password=${user.password}&password2=${user.password2}&oldPassword=${user.oldPassword}`;
      }

      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });
      return this.http.put(this.apiURL+"user/"+oldId, body, { headers })
          .map( res =>{
            return res.json();
          })
    }

    delete(idUser:String){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`
      });

      return this.http.delete(this.apiURL+"user/"+idUser, { headers } )
          .map( res =>{
            return res.json();
          })
    }

    comprobateActivationToken(token:String){
      let headers = new Headers({
        'Content-Type':'application/x-www-form-urlencoded'
      });

      return this.http.get(this.apiURL+"confirmation/"+token, { headers } )
          .map( res =>{
            return res.json();
          })
    }

    isUserAuthenticated(){
      if(localStorage['Bearer']!=null){
        this.isAuthenticated=true;
        return true;
      }
      else{
        this.isAuthenticated=false;
        return false;
      }
    }

    isUserAdmin(){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });

      return this.http.get(this.apiURL+"isAdmin", { headers } )
          .map( res =>{
            return res.json();
          });
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

    listCoutries(){
      return this.http.get(this.apiURL + "geonamesAllCountries")
        .map(res=>{
          return res.json();
        })
    }

    listCities(value:string){
      return this.http.get(this.apiURL + "geonamesCities/" + value)
        .map(res=>{
          return res.json();
        })
    }

}
