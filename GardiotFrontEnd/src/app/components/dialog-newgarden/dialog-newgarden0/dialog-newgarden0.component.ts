import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { DialogNewgarden1Component } from '../dialog-newgarden1/dialog-newgarden1.component';

@Component({
  selector: 'app-dialog-newgarden0',
  templateUrl: './dialog-newgarden0.component.html',
  styleUrls: ['./dialog-newgarden0.component.css']
})
export class DialogNewgarden0Component implements OnInit {


  private photoURL = "";
  constructor(
    public thisDialogRef: MatDialogRef<DialogNewgarden0Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _route: Router,
    private dialog: MatDialog,
  ) {
      if(window.location.toString().indexOf("localhost")>=0){
        this.photoURL="/assets";
      }
      else if(window.location.toString().indexOf("gardiot")>=0){
        this.photoURL="/app/assets";
      }

   }


  onCloseConfirm() {
    this.openDialog();
    this.thisDialogRef.close('Empezar');

  }  openDialog() {
    let dialogRef = this.dialog.open(DialogNewgarden1Component, {
      width: '800px',
      data: {}
    });
  }

  // saveGarden() {
  //   this._gardenService.insertGarden(this.garden)
  //     .subscribe(data => {
  //     },
  //       error => {
  //         let v = JSON.parse(error._body);
  //       });
  // }

  ngOnInit() {
  }

}
