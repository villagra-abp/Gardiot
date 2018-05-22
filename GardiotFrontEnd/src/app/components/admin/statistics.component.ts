import { Component, OnInit } from '@angular/core';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']

})
export class StatisticsComponent implements OnInit {
  public dialogResult = "";
  public selectedValue: string;
  public datos = [
    { value: '15', viewValue: 'Últimos 15 minutos' },
    { value: '60', viewValue: 'Últimos 60 minutos' },
    { value: '120', viewValue: 'Últimos 120 minutos' },
    { value: '1440', viewValue: 'Últimas 24 horas' },
    { value: '10080', viewValue: 'Últimos 7 días' },
    { value: '44640', viewValue: 'Último mes' },
    { value: '525600', viewValue: 'Último año' },
    { value: '1051200', viewValue: 'Últimos dos años' },
  ];

  constructor(public dialog: MatDialog, public _userService: UserService) {
  }
  ngOnInit() {
  }
}
