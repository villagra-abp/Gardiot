import { Component, OnInit } from '@angular/core';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html'

})
export class StatisticsComponent implements OnInit {
  dialogResult = "";
  selectedValue: string;
  datos = [
    {value: '15', viewValue: 'Últimos 15 minutos'},
    {value: '60', viewValue: 'Últimos 60 minutos'},
    {value: '120', viewValue: 'Últimos 120 minutos'},
    {value: '1440', viewValue: 'Últimas 24 horas'},
    {value: '10080', viewValue: 'Últimos 7 días'},
    {value: '44640', viewValue: 'Último mes'},
    {value: '525600', viewValue: 'Último año'},
    {value: '1051200', viewValue: 'Últimos dos años'},
  ];

  constructor( public dialog:MatDialog ) {
    // this.datos = [15,60,120,1440,10080,525600,1051200];
    // this.datos = [
    //   {value: '15', viewValue: 'Últimos 15 minutos'},
    //   {value: '60', viewValue: 'Últimos 60 minutos'},
    //   {value: '120', viewValue: 'Últimos 120 minutos'},
    //   {value: '1440', viewValue: 'Últimas 24 horas'},
    //   {value: '10080', viewValue: 'Últimos 7 días'},
    //   {value: '44640', viewValue: 'Último mes'},
    //   {value: '525600', viewValue: 'Último año'},
    //   {value: '1051200', viewValue: 'Últimos dos años'},
    // ];
   }

  // captura(){
  // }

  ngOnInit() {

  }

  // openDialog(){
  //   let dialogRef = this.dialog.open(DialogDeleteComponent, {
  //     width:'600px',
  //     data: 'Hola Mriano'
  //   });
  //   dialogRef.afterClosed().subscribe(result=> {
  //     console.log(`Dialog closed: ${result}`);
  //     this.dialogResult = result;
  //   })
  // }

}
