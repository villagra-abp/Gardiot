import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../../../services/treatment.service';
import { Treatment } from "../../../classes/treatment.class";

@Component({
  selector: 'app-listtreatment',
  templateUrl: './listtreatment.component.html',
  styleUrls: ['./listtreatment.component.css']
})
export class ListtreatmentComponent implements OnInit {

  private treatments:any[]=[];
  private treatment=new Treatment();
  private numeroItems:number;
  private paginaActual:number=1;
  private elementosPorPagina:number=6;
  private estado:boolean=false;// false es listado y true buscador

  constructor(
    private _treatmentService:TreatmentService,

  ) { }




  mostrar(){
    if(this.estado==false){
      this._treatmentService.detailsAll(this.paginaActual,this.elementosPorPagina)
          .subscribe(data=>{
            console.log(data);
            this.treatments=[];
            for(let key$ in data){
              this.treatments.push(data[key$]);
            }
          },
        error => {
          console.error(error);
        });
    }else{
    //  this.searchcontent(this.paginaActual,this.elementosPorPagina);
    }
  }

  ngOnInit() {
        this.mostrar();
  }

}
