import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { PlantService } from "../../services/plant.service";
import { Plant } from "../../classes/user.class";

import { AppComponent } from "../../app.component";


@Component({
  selector: 'app-plantdata',
  templateUrl: './plantdata.component.html'

})
export class PlantdataComponent implements OnInit {

  constructor(
    private _userService:PlantService,
    private _route:Router,
    private _appComponent:AppComponent) { }

  ngOnInit() {
  }

}
