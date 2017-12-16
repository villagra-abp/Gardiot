import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Register } from "../interfaces/register.interface";
import 'rxjs/Rx';

@Injectable()
export class RegisterService {

  registerURL:string="http://localhost:3000/api/register"
  constructor( private http:Http) {}
    nuevoRegistro( register:Register ){
      let body = `id=${register.email}&password=${register.password}`;
      let headers = new Headers({
        'Content-Type':'application/x-www-form-urlencoded'
      });

      return this.http.post(this.registerURL, body, { headers } )
          .map( res=>{
            if(res.json().Mensaje=="Insertado"){
              alert(`Usuario ${register.email} insertado`);
            }
            return res.json();
          })
    }

}
