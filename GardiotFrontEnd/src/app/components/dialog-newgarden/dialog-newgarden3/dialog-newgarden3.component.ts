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
  selector: 'app-dialog-newgarden3',
  templateUrl: './dialog-newgarden3.component.html',
  styleUrls: ['./dialog-newgarden3.component.css']
})
export class DialogNewgarden3Component implements OnInit {
  private garden = new Garden("");
  private photoURL = "";
  constructor(
    public thisDialogRef: MatDialogRef<DialogNewgarden3Component>,
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

  getid() {
    this._gardenService.details().subscribe(data => {
        if (data != null) {
          this.garden = data;
        }
      },
      error => {
        console.error(JSON.parse(error._body).Mensaje);
      });
  }

  onCloseConfirm() {
    this.saveGarden();
    window.location.reload();
    this.thisDialogRef.close('Guardado');
  }

  onCloseAtras() {
    this.openDialogAtras();
    this.thisDialogRef.close('Guardado');
  }

  openDialogAtras() {
    let dialogRef = this.dialog.open(DialogNewgarden2Component, {
      width: '800px',
      data: {}
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

  ngOnInit() {
        this.getid();
  }

}
