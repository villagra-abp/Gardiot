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

  private treatments: any[] = [];
  private treatment = new Treatment();
  private numeroItems: number;
  private paginaActual: number = 1;
  private elementosPorPagina: number = 6;
  private estado: boolean = false;// false es listado y true buscador

  constructor(
    private _treatmentService: TreatmentService,
    private activatedRoute: ActivatedRoute,
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

  openDialog(id: number, tipo: number) {
    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '600px',
      data: { idObject: id, typeObject: tipo }
    });
  }

  ngOnInit() {
    this.ActualizarPagina();
  }

}
