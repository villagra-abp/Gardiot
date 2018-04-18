import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(
    public thisDialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:number,
    private _productService:ProductService,
  ) { }

  onCloseConfirm(){
    this.delete();
  }
  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }
  delete(){
    this._productService.deleteProduct(this.data[0])
    .subscribe(data=>{
      window.location.reload();
      this.thisDialogRef.close('Confirm');
    },
    error => {
      console.error(error);
    });
  }



  ngOnInit() {
  }

}
