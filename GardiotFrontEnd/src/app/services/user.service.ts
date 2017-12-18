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
              sessionStorage.setItem('token', res.json().Token);
              console.log(res.json().Token);
            }
            else{
              console.log("Token es null");
              console.log(res.json());
            }

            return res.json();
          })
    }

    logout(): void{
      sessionStorage.removeItem('token');
    }

}
