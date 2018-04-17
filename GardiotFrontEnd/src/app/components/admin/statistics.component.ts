import { Component, OnInit } from '@angular/core';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html'

})
export class StatisticsComponent implements OnInit {
  dialogResult = "";
  selectedValue: string;

  minutos = [
    {value: '15', viewValue: 'Últimos 15 minutos'},
    {value: '60', viewValue: 'Últimos 60 minutos'},
    {value: '120', viewValue: 'Últimos 120 minutos'}
  ];
  constructor( public dialog:MatDialog ) {

   }


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
