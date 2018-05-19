import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PlantService } from "../../../services/plant.service";
import { Plant } from "../../../classes/plant.class";
import { Family } from "../../../classes/family.class";
import { AppComponent } from "../../../app.component";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DatePipe } from '@angular/common';
import { DeprecatedDatePipe } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editplant',
  templateUrl: './editplant.component.html',
  styleUrls: ['./editplant.component.css']
})
export class EditplantComponent implements OnInit {

  plant = new Plant();
  public plants: any[] = [];
  public families: any[] = [];
  uploader: FileUploader;

  constructor(
    public _plantService: PlantService,
    public _appComponent: AppComponent,
    public _ng2ImgMax: Ng2ImgMaxService,
    public datePipe: DatePipe,
    public _router: ActivatedRoute,
    public _route: Router

  ) { }

  guardar() {
    console.log(this.plant);
    this._plantService.modify(this.plant)
      .subscribe(data => {
        this._appComponent.mensajeEmergente("La planta se ha guardado", "primary", "plant/" + this.plant.id);
      },
      error => {
        let v = JSON.parse(error._body);
        this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
      });
  }


  mostrarFamilias() {
    this._plantService.detailsAllFamilies()
      .subscribe(data => {
        for (let key$ in data) {
          this.families.push(data[key$]);
        }
      },
      error => {
        console.error(error);
      });

  }

  uploadPhoto() {
    let imgUpl = <HTMLInputElement>document.querySelector('#photo_plant');
    if (this.uploader.getNotUploadedItems().length) {
      console.log(imgUpl.files);
      let file = [];
      file.push(imgUpl.files[0]);
      file.forEach(function() {
      });
      this._ng2ImgMax.compress(file, 1.25).subscribe(
        result => {
          const newImage = new File([result], result.name);
          this.uploader.clearQueue();
          this.uploader.addToQueue([newImage]);
          this.uploader.uploadAll();
        },
        error => console.log(error)
      );
    }
  }

  managePhoto() {

    this.uploader = new FileUploader({ url: this._plantService.apiURL + 'uploadPlant', itemAlias: 'photo' });
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      let url = response.split(" ");
      url = url[url.length - 1];
      url = url.split("\\");
      url = url[url.length - 1];
      this.plant.photo = url;
      console.log('hola guapa');
      this.guardar();
    };
  }

  mostrar(idPlanta: number) {
    this._plantService.details(idPlanta)
      .subscribe(data => {
        //this.plant.id=data[0].id;//El objeto no lleva el id
        this.plant.id = idPlanta;
        console.log(this.plant.id);
        this.plant.scientificName = data[0].scientificName;
        this.plant.commonName = data[0].commonName;
        this.plant.description = data[0].description;
        this.plant.family = data[0].family;
        this.plant.depth = data[0].depth;
        this.plant.distance = data[0].distance;
        this.plant.diseaseResist = data[0].diseaseResist;

        this.plant.initDatePlant = this.datePipe.transform(data[0].initDatePlant, 'yyyy-MM-dd');
        this.plant.finDatePlant = this.datePipe.transform(data[0].finDatePlant, 'yyyy-MM-dd');
        this.plant.initDateBloom = this.datePipe.transform(data[0].initDateBloom, 'yyyy-MM-dd');
        this.plant.finDateBloom = this.datePipe.transform(data[0].finDateBloom, 'yyyy-MM-dd');
        this.plant.initDateHarvest = this.datePipe.transform(data[0].initDateHarvest, 'yyyy-MM-dd');
        this.plant.finDateHarvest = this.datePipe.transform(data[0].finDateHarvest, 'yyyy-MM-dd');
        // this.plant.initDatePlant=data[0].initDatePlant.substring(0, 10);
        this.plant.leaveType = data[0].leaveType;
      },
      error => {
        console.error(error);
        localStorage.clear();
        sessionStorage.clear();
        //  this._route.navigate(['/login']);
      });

  }

  formatoFecha(fecha) {
    let fech = new Date(fecha);
    // fech.setDate(fech.getDate()+1);
    var anno = fech.getFullYear();
    console.log(anno);
    var mes = fech.getMonth() + 1;
    console.log(mes);
    var dia = fech.getDate();
    console.log(dia);


    var tsetDob = this.datePipe.transform(fecha, 'yyyy-MM-dd');

    //var fechaFinal =dia+'/'+mes+'/'+anno;
    var fechaFinal = anno + '-' + mes + '-' + dia;
    var fechaGuay = new Date(anno + '/' + mes + '/' + dia);
    console.log(tsetDob);
    return (tsetDob);
    //return fech;
  }

  getID() {
    this._router.params.subscribe(params => {
      if (params['id'] != null) {
        this.plant = new Plant(params['id']);
        this.mostrar(this.plant.id);
      } else {
        this._route.navigate(['/plants']);
      }
    });
  }


  ngOnInit() {
    this.getID();
    this.mostrarFamilias();
    this.managePhoto();
  }
}
