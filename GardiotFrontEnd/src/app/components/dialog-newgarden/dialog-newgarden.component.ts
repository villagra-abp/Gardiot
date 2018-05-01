import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { GardenService } from "../../services/garden.service";
import { Garden } from "../../classes/garden.class";
import { MatDialog } from '@angular/material';
import { DialogNewgarden2Component } from './dialog-newgarden2/dialog-newgarden2.component';

@Component({
  selector: 'app-dialog-newgarden',
  templateUrl: './dialog-newgarden.component.html',
  styleUrls: ['./dialog-newgarden.component.css']
})
export class DialogNewgardenComponent implements OnInit {
  private garden = new Garden("");

  constructor(
    public thisDialogRef: MatDialogRef<DialogNewgardenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _gardenService: GardenService,
    private _route: Router,
    private dialog: MatDialog,
  ) { }
    // @HostListener('document:keyup', ['$event'])

  onCloseConfirm() {
    this.openDialog();
    this.saveGarden();
    this.thisDialogRef.close('Guardado');

  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogNewgarden2Component, {
      width: '800px',
      data: {}
    });
  }


  saveGarden() {
    this._gardenService.insertGarden(this.garden)
      .subscribe(data => {
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
