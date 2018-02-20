import { Component, OnInit } from '@angular/core';
import { Plant } from "../../classes/plant.class";
import { Router } from "@angular/router";
import { PlantService } from "../../services/plant.service";


@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
