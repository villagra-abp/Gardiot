import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { GardenService } from "../../../services/garden.service";
import { Garden } from "../../../classes/garden.class";
import { MatDialog } from '@angular/material';
import { DialogNewgarden2Component } from '../dialog-newgarden2/dialog-newgarden2.component';

@Component({
  selector: 'app-dialog-newgarden',
  templateUrl: './dialog-newgarden1.component.html',
  styleUrls: ['./dialog-newgarden1.component.css']
})
export class DialogNewgarden1Component implements OnInit {
  private garden = new Garden("");
  private photoURL = "";

  constructor(
    public thisDialogRef: MatDialogRef<DialogNewgarden1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _gardenService: GardenService,
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


  getid(){
    this._gardenService.details().subscribe(data => {
        if (data != null) {
          this.garden = data;
        }
      },
      error => {
        console.error(JSON.parse(error._body).Mensaje);
      });
  }

  saveGarden() {
    this._gardenService.modifyGarden2(this.garden)
      .subscribe(data => {
      },
        error => {
          let v = JSON.parse(error._body);
        });
  }


  onCloseConfirm() {
    this.saveGarden();
    this.openDialog();
    this.thisDialogRef.close('Guardado');

  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogNewgarden2Component, {
      width: '45em', disableClose: true, data: {}});
  }

  ngOnInit() {
    this.getid();
  }
}
