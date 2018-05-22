import { Component, OnInit, Inject, HostListener, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { GardenService } from "../../services/garden.service";
import { Garden } from "../../classes/garden.class";

@Component({
  selector: 'app-dialog-allgardens',
  templateUrl: './dialog-allgardens.html',
  styleUrls: ['./dialog-allgardens.css']
})
export class DialogAllGardensComponent implements OnInit {
  constructor(
    public thisDialogRef: MatDialogRef<DialogAllGardensComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
  ngOnInit() {
    console.log(this.data);
  }
}
