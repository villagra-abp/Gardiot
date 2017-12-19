import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { User } from "../interfaces/user.interface";
import 'rxjs/Rx';

@Injectable()
export class UserService {

  private apiURL:string="http://localhost:3000/api/";

  constructor( private http:Http) {}

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
      let headers = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET',
        'Access-Control-Allow-Headers':'Content-Type'
      });

      return this.http.get(this.apiURL+"auth/google", { headers })
        .map(res=>{
          return res.json();
        });
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

    logout(): void{
      //llamar a la api a su método logout
      localStorage.removeItem('Bearer');
    }

}
