import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { TreatmentService } from '../../services/treatment.service';
import { FeedService } from '../../services/feed.service';
import { PlantService } from "../../services/plant.service";


@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(
    public thisDialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _productService:ProductService,
    private _treatmentService:TreatmentService,
    private _feedService:FeedService,
    private _plantService:PlantService,
  ) { }

  onCloseConfirm(){
    this.delete();
  }
  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }
  delete(){
    if(this.data.typeObject==1){
      this._productService.deleteProduct(this.data.idObject)
      .subscribe(data=>{
        window.location.reload();
        this.thisDialogRef.close('Confirm');
    },
    error => {
      console.error(error);
    });
    }
    if(this.data.typeObject==2){
      this._treatmentService.deleteTrearment(this.data.idObject)
      .subscribe(data=>{
        window.location.reload();
        this.thisDialogRef.close('Confirm');
    },
    error => {
      console.error(error);
    });
    }
    if(this.data.typeObject==3){
      this._feedService.deleteFeed(this.data.idObject)
      .subscribe(data=>{
        window.location.reload();
        this.thisDialogRef.close('Confirm');
    },
    error => {
      console.error(error);
    });
    }

    if(this.data.typeObject==4){
      this._plantService.deletePlant(this.data.idObject)
      .subscribe(data=>{
        // window.location.reload();
        // this.thisDialogRef.close('Confirm');
    },
    error => {
      console.error(error);
    });
    }

  }



  ngOnInit() {
  }

}
