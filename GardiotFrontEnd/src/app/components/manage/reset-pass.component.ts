import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from "../../classes/user.class";
@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  user=new User("");
  constructor() {}

  resetPass(f: NgForm) {
      var email = f.value;
      var nombre = email.first;
      console.log(nombre);
    }





  ngOnInit() {
  }

}
