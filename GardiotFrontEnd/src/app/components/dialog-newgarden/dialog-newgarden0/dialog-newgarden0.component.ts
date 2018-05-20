import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { GardenService } from "../../../services/garden.service";
import { Garden } from "../../../classes/garden.class";
import { MatDialog } from '@angular/material';
import { DialogNewgarden1Component } from '../dialog-newgarden1/dialog-newgarden1.component';

@Component({
  selector: 'app-dialog-newgarden0',
  templateUrl: './dialog-newgarden0.component.html',
  styleUrls: ['./dialog-newgarden0.component.css']
})
export class DialogNewgarden0Component implements OnInit {
  public photoURL = "";
  public garden = new Garden('');
  constructor(
    public thisDialogRef: MatDialogRef<DialogNewgarden0Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _route: Router,
    public dialog: MatDialog,
    public _gardenService: GardenService,
  ) {
      if(window.location.toString().indexOf("localhost")>=0){
        this.photoURL="/assets";
      }
      else if(window.location.toString().indexOf("gardiot")>=0){
        this.photoURL="/app/assets";
      }

   }

  onCloseConfirm() {
    this.saveGarden(1);
    
  }

  onCloseOmit() {
    this.saveGarden(0);
     
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogNewgarden1Component, {
      width: '45em', disableClose: true, data: {}});
  }

  saveGarden(next) {
    this._gardenService.insertGarden(this.garden)
      .subscribe(data => {
        if(next == 1){
          this.openDialog();
          this.thisDialogRef.close('Empezar');
        }else{
          this.thisDialogRef.close('Empezar');
          this._route.navigate(['detail']);
        }

      },
        error => {
          let v = JSON.parse(error._body);
        });
  }

  ngOnInit() {
      this.garden.width=2;
      this.garden.length=2;
  }

}
