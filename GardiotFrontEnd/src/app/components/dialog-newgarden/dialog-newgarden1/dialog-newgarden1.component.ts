import { Component, OnInit, Inject } from '@angular/core';
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
  public garden = new Garden("");
  public photoURL = "";

  constructor(
    public thisDialogRef: MatDialogRef<DialogNewgarden1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _gardenService: GardenService,
    public _route: Router,
    public dialog: MatDialog,
  ) {

    if (window.location.toString().indexOf("localhost") >= 0) {
      this.photoURL = "/assets";
    }
    else if (window.location.toString().indexOf("gardiot") >= 0) {
      this.photoURL = "/app/assets";
    }
  }


  getid() {
    this._gardenService.details().subscribe(data => {
      if (data != null) {
        //console.log(data);
        this.garden = data;
        this.garden.length !== undefined ? this.garden.length = (this.garden.length - 1) / 2 : this.garden.length = 6;
        this.garden.width !== undefined ? this.garden.width = (this.garden.width - 1) / 2 : this.garden.width = 6;
      }
    },
      error => {
        console.error(JSON.parse(error._body).Mensaje);
      });
  }

  saveGarden() {
    let gardenCopy = JSON.parse(JSON.stringify(this.garden));
    gardenCopy.length = (this.garden.length * 2) + 1;
    gardenCopy.width = (this.garden.width * 2) + 1;
    this._gardenService.modifyGarden2(gardenCopy)
      .subscribe(data => {
        this.openDialog();
        this.thisDialogRef.close('Guardado');
      },
        error => {
          let v = JSON.parse(error._body);
        });
  }

  onCloseConfirm() {
    this.saveGarden();
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogNewgarden2Component, {
      width: '45em', disableClose: true, data: {}
    });
  }

  ngOnInit() {
    this.getid();
  }
}
