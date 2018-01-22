import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from '../../classes/user.class';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-resend',
  templateUrl: './resend.component.html'
})
export class ResendComponent implements OnInit{

  user=new User("");

  constructor(
    private _detailService:UserService,
    private _route:Router ){ }


  ngOnInit() {
  }


}
