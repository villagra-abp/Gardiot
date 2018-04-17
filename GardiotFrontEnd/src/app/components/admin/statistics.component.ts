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
  constructor( public dialog:MatDialog ) {
    this.minutos=[15,60,120];
   }
   capturar(){

   }

  ngOnInit() {
  }
  openDialog(){
    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      width:'600px',
      data: 'Hola Mriano'
    });
    dialogRef.afterClosed().subscribe(result=> {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }

}
