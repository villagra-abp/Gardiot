import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from "@angular/http";
import { User } from "../classes/user.class";
import { Router } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class UserService {

  public apiURL:string="";
  public isAdmin:boolean;
  public isAuthenticated:boolean;

  constructor( private http:Http, private _route:Router) {
    if(window.location.toString().indexOf("localhost")>=0){
      this.apiURL="http://localhost:3000/api/";
    }
    else if(window.location.toString().indexOf("gardiot")>=0){
      this.apiURL="https://gardiot.ovh/api/";
    }
  }

    register( user:User ){
      let body = `id=${user.id}&password=${user.password}&password2=${user.password2}`;
      body+= `&name=${user.name}&lastName=${user.lastName}`;
      if(user.birthDate!=null){
        //body+=`&birthDate=${user.birthDate}`;
      }

      let headers = new Headers({
        'Content-Type':'application/x-www-form-urlencoded'
      });

      return this.http.post(this.apiURL+"register", body, { headers } )
          .map( res=>{
            if(res.json().Token!=null){
              if(window.location.toString().indexOf("gardiot")>=0){

              }
              else{

                localStorage.setItem('Bearer', res.json().Token);
                let expires=Date.now()+(6*60*60*1000);//6 horas para que expire el token
                localStorage.setItem('expires_at', expires.toString());
              }
            }
            return res.json();
          })
    }


    registerAdmin( user:User ){
      let body = `id=${user.id}&password=${user.password}&password2=${user.password2}`;
      body+= `&name=${user.name}&lastName=${user.lastName}`;
      body+= `&admin=${user.admin}`;

      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });

      return this.http.post(this.apiURL+"admin/user", body, { headers } )
          .map( res=>{
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
              localStorage.setItem('Bearer', res.json().Token);
              let expires=Date.now()+(6*60*60*1000);//6 horas para que expire el token
              localStorage.setItem('expires_at', expires.toString());
            }
            else{
              
            }

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

    detailsByUser(user:User){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`
      });

      return this.http.get(this.apiURL+"admin/user/"+user.id, { headers } )
          .map( res =>{
            return res.json();
          })
    }

    detailsAll(page:number, items:number){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`
      });

      return this.http.get(this.apiURL+"admin/users/"+items+"/"+page+"/name/asc", { headers } )
          .map( res =>{
            return res.json();
          })
    }

    deleteUser(idUser: number){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`
      });
      return this.http.delete(this.apiURL+"admin/user/"+ idUser, { headers } )
          .map( res =>{
            return res.json();
          })
    }

    getNumberItems(){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`
      });
      return this.http.get(this.apiURL+"/admin/numUsers", { headers } )
          .map( res =>{
            return res.json();
          })
    }

    savePhotoUser(photo:String){
      let body=`photo=${photo}`;
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });

      return this.http.put(this.apiURL+"user", body, { headers })
          .map( res =>{
            return res.json();
          })
    }

    modifyUserProfile(user:User){
      let body = `name=${user.name}`;
      if(user.lastName!==undefined){
        body+=`&lastName=${user.lastName}`;
      }
      if(user.photo!==undefined){
        body+=`&photo=${user.photo}`;
      }
      var country = 0;

      if(user.birthDate!=null){

        body+=`&birthDate=${user.birthDate}`;
      }
      if(user.oldPassword && user.password){
        body+=`&password=${user.password}&password2=${user.password2}&oldPassword=${user.oldPassword}`;
      }

      if(user.countryCode){
        body+= `&countryCode=${user.countryCode}`;
        country = 1;
      }
      if(user.city!==undefined && country==1){

        body+=`&city=${user.city}`;
      }

      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });
      return this.http.put(this.apiURL+"user", body, { headers })
          .map( res =>{
            return res.json();
          })
    }

    modifyUserProfileAdmin(user:User, oldId:String, user2:User){
      let body = `name=${user.name}`;
      body+= `&lastName=${user.lastName}`;
      body+= `&admin=${user.admin}`;
      var country = 0;

      if(user.birthDate!=null){
        body+=`&birthDate=${user.birthDate}`;
      }
      if(user2.countryCode){
        body+= `&countryCode=${user2.countryCode}`;
        country = 1;
      }
      if(user2.city && country==1){
        body+=`&city=${user2.city}`;
      }

      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });
      return this.http.put(this.apiURL+"/admin/user/"+oldId, body, { headers })
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

      return this.http.post(this.apiURL+"confirmation/"+token, { headers } )
          .map( res =>{
            return res.json();
          })
    }

    resendConfirmation(){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`
      });

      return this.http.post(this.apiURL+"resend", { headers })
        .map(res=>{
          return res.json();
        })
    }

    isUserAuthenticated(){
      if(localStorage['Bearer']!=null && localStorage['expires_at']!=null){
        let expire=parseInt(localStorage['expires_at']);//comprobar que sigue siendo válido el token
        if(expire<Date.now()){//Si no ha pasado la fecha de expiración
          localStorage.clear();
          this.isAuthenticated=false;
          return false;
        }
        else{
          this.isAuthenticated=true;
          return true;
        }
      }
      else{
        localStorage.clear();
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

    listCitiesByZip(country:string, value:string){
      return this.http.get(this.apiURL + "geonamesSearchByZip/" + value+"/"+country)
        .map(res=>{
          return res.json();
        })
    }
    // reset password
    resetPassword(email:String){
      let body=`email=${email}`;
      let headers = new Headers({
        'Content-Type':'application/x-www-form-urlencoded',
        //'Authorization':`Bearer ${localStorage['Bearer']}`,
      });
      
      return this.http.post(this.apiURL+"forgetPassword", body, { headers })
      .map(res=>{
        return res.json();
      })
    }
    // reset password2
    newPassword(pass1:String, pass2:String, token:String){
    
      let body=`password=${pass1}&password2=${pass2}`;
      let headers = new Headers({
        'Content-Type':'application/x-www-form-urlencoded',
      });
      
      return this.http.put(this.apiURL+"resetPassword/"+token, body, { headers })
      .map(res=>{
        
        return res.json();
      })
    }

    searchAll(user:User,page:number, items:number){
      let body = `id=${user.id}`;
      body += `&name=${user.name}`;
      body += `&lastName=${user.lastName}`;
      body += `&admin=${user.admin}`;
      body += `&active=${user.active}`;
      
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`,
        'Content-Type':'application/x-www-form-urlencoded'
      });
      return this.http.post(this.apiURL+"find/User/"+items+"/"+page+"/id/ASC", body,  { headers } )
          .map( res =>{
            return res.json();
          })
    }
    /* Comprueba si existe el usuario */
    isUser(idUser:String){
      let headers = new Headers({
        'Authorization':`Bearer ${localStorage['Bearer']}`
      });

      return this.http.get(this.apiURL+"admin/userExist/"+idUser, { headers } )
          .map( res =>{
            return res.json();
          })
    }

}
