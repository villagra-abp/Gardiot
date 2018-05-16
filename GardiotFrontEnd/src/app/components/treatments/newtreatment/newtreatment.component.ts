import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { NgForm } from "@angular/forms";
import { TreatmentService } from "../../../services/treatment.service";
import { Treatment } from "../../../classes/treatment.class";
@Component({
  selector: 'app-newtreatment',
  templateUrl: './newtreatment.component.html',
  styleUrls: ['./newtreatment.component.css']
})
export class NewtreatmentComponent implements OnInit {

  treatment = new Treatment();
  public treatments: any[] = [];

  constructor(
    public _treatmentService: TreatmentService,
    public _appComponent: AppComponent,
  ) { }

  guardar() {
    this._treatmentService.save(this.treatment)
      .subscribe(data => {
        this._appComponent.mensajeEmergente("El tratamiento se ha guardado", "primary", "admin/treatments?pag=1");
      },
      error => {
        let v = JSON.parse(error._body);
        this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
      });
  }

  ngOnInit() {
  }

}
