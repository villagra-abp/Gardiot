import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-task',
  templateUrl: './dialog-task.component.html',
  styleUrls: ['./dialog-task.component.css']
})
export class DialogTaskComponent implements OnInit {

  constructor(
    public thisDialogRef: MatDialogRef<DialogTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }

  ngOnInit() {
  }

}
