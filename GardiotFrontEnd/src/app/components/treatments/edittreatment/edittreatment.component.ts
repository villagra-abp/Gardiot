import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { NgForm } from "@angular/forms";
import { TreatmentService } from "../../../services/treatment.service";
import { Treatment } from "../../../classes/treatment.class";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edittreatment',
  templateUrl: './edittreatment.component.html',
  styleUrls: ['./edittreatment.component.css']
})
export class EdittreatmentComponent implements OnInit {

  treatment = new Treatment();
  public treatments: any[] = [];

  constructor(
    public _treatmentService: TreatmentService,
    public _appComponent: AppComponent,
    public _router: ActivatedRoute,
    public _route: Router,
  ) { }

  guardar() {
    this._treatmentService.modify(this.treatment)
      .subscribe(data => {
        this._appComponent.mensajeEmergente("El tratamiento se ha modificado", "primary", "admin/treatments?pag=1");
      },
      error => {
        let v = JSON.parse(error._body);
        this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
      });
  }

  getID() {
    this._router.params.subscribe(params => {
      if (params['id'] != null) {
        this.treatment = new Treatment(params['id']);
        this.mostrar(this.treatment.id);
      } else {
        this._route.navigate(['/treatments']);
      }
    });
  }

  mostrar(idTreatment: number) {
    this._treatmentService.details(idTreatment)
      .subscribe(data => {
        this.treatment.id = idTreatment;
        this.treatment.name = data[0].name;
        this.treatment.description = data[0].description;


      },
      error => {
        console.error(error);
        localStorage.clear();
        sessionStorage.clear();
      });

  }

  ngOnInit() {
    this.getID();
  }
}
