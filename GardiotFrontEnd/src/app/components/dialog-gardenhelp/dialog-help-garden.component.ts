import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { GardenService } from "../../services/garden.service";
import { Garden } from "../../classes/garden.class";



@Component({
  selector: 'app-dialog-help-garden',
  templateUrl: './dialog-help-garden.component.html',
  styleUrls: ['./dialog-help-garden.component.css']
})
export class DialogHelpGardenComponent  implements OnInit {

  constructor(
    public thisDialogRef: MatDialogRef<DialogHelpGardenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }
    // @HostListener('document:keyup', ['$event'])

    onCloseCancel() {
      this.thisDialogRef.close('Cancel');
    }


  ngOnInit() {
  }

}
