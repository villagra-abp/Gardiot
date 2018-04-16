import { Component, OnInit } from '@angular/core';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html'

})
export class StatisticsComponent implements OnInit {
  dialogResult = "";
  constructor( public dialog:MatDialog ) { }
 
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
