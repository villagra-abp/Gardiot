import { Component, OnInit } from '@angular/core';
import { TreatmentService } from '../../../services/treatment.service';
import { Treatment } from "../../../classes/treatment.class";
import { RouterLink, ActivatedRoute, Params } from '@angular/router';
import { DialogDeleteComponent } from '../../dialog-delete/dialog-delete.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-listtreatment',
  templateUrl: './listtreatment.component.html',
  styleUrls: ['./listtreatment.component.css']
})
export class ListtreatmentComponent implements OnInit {

  public treatments: any[] = [];
  public treatment = new Treatment();
  public numeroItems: number;
  public paginaActual: number = 1;
  public elementosPorPagina: number = 6;
  public estado: boolean = false;// false es listado y true buscador

  constructor(
    public _treatmentService: TreatmentService,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  mostrar() {
    if (this.estado == false) {
      this._treatmentService.detailsAll(this.paginaActual, this.elementosPorPagina)
        .subscribe(data => {
          this.treatments = [];
          for (let key$ in data) {
            this.treatments.push(data[key$]);
          }
        },
        error => {
          console.error(error);
        });
    } else {
      // this.searchcontent(this.paginaActual,this.elementosPorPagina);
      console.log("assss");
    }
  }

  ActualizarPagina() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.paginaActual = params['pag'];
      this.getitems();
    });
  }

  getitems() {
    this._treatmentService.getNumberItems()
      .subscribe(data => {
        if (this.estado == false) {
          this.numeroItems = data[0].NUMTREATMENT;
        }
        this.mostrar();
      },
      error => {
        console.error(error);
      });
  }

  delete(idTreatment: number) {
    this._treatmentService.deleteTrearment(idTreatment)
      .subscribe(data => {
        this.ActualizarPagina();
      },
      error => {
        console.error(error);
      });
  }

  searchcontent(page: number, items: number) {
    this._treatmentService.searchAll(this.treatment, page, items)
      .subscribe(data => {
        if (data[0] != undefined) {
          this.treatments = [];
          this.numeroItems = data[0].num;
          if (this.estado == false) {
            this.paginaActual = 1;
            this.estado = true;
          }
          for (let key$ in data) {
            this.treatments.push(data[key$]);
          }
        }else{
          this.treatments = [];
          this.numeroItems = 0;
          this.paginaActual = 1;
        }
      },
      error => {
        console.error(error);
      });
  }

  openDialog(id: number, tipo: number) {
    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '40em',
      data: { idObject: id, typeObject: tipo }
    });
  }

  ngOnInit() {
    this.ActualizarPagina();
  }

}
