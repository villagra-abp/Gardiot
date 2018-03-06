import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PlantService } from "../../../services/plant.service";
import { Plant } from "../../../classes/plant.class";
import { Family } from "../../../classes/family.class";
import { AppComponent } from "../../../app.component";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Ng2ImgMaxService} from 'ng2-img-max';
import { DatePipe } from '@angular/common';
import { DeprecatedDatePipe } from '@angular/common';

@Component({
  selector: 'app-editplant',
  templateUrl: './editplant.component.html',
  styleUrls: ['./editplant.component.css']
})
export class EditplantComponent implements OnInit {

  plant=new Plant();
  private plants:any[]=[];
  private families:any[]=[];
  uploader:FileUploader;

  constructor(
    private _plantService:PlantService,
    private _appComponent:AppComponent,
    private _ng2ImgMax:Ng2ImgMaxService,
    private datePipe: DatePipe

    ) { }

  guardar(){
        console.log('pasaba por aqui');
    this._plantService.modify(this.plant)
        .subscribe(data=>{

            this._appComponent.mensajeEmergente("La planta se ha guardado", "primary", "admin/plantdata");

        },
        error=>{
          let v=JSON.parse(error._body);
          this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
  }


  mostrarFamilias(){
    this._plantService.detailsAllFamilies()
        .subscribe(data=>{
          for(let key$ in data){
            this.families.push(data[key$]);
          }
        },
      error => {
        console.error(error);
      });

    }

  uploadPhoto(){
    let imgUpl=<HTMLInputElement>document.querySelector('#photo_plant');
    if(this.uploader.getNotUploadedItems().length){
      console.log(imgUpl.files);
      let file=[];
      file.push(imgUpl.files[0]);
      file.forEach(function(){
      });
      this._ng2ImgMax.compress(file, 1.25).subscribe(
        result=>{
          const newImage=new File([result], result.name);
          this.uploader.clearQueue();
          this.uploader.addToQueue([newImage]);
          this.uploader.uploadAll();
        },
        error=> console.log(error)
      );
    }
  }

  managePhoto(){
    this.uploader=new FileUploader({url: this._plantService.apiURL+'uploadPlant', itemAlias: 'photo'});
    this.uploader.onAfterAddingFile = (file)=> {
      file.withCredentials = false;
    };

    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
         let url=response.split(" ");
         url=url[url.length-1];
         url=url.split("\\");
         url=url[url.length-1];
         this.plant.photo='assets/images/imgPlants/'+url;
         this.guardar();
         };
  }

  mostrar(){
    this._plantService.details(5)
        .subscribe(data=>{
          this.plant.id=data[0].id;
          this.plant.scientificName=data[0].scientificName;
          this.plant.commonName=data[0].commonName;
          this.plant.description=data[0].description;
          this.plant.family=data[0].family;
          this.plant.depth=data[0].depth;
          this.plant.distance=data[0].distance;
          this.plant.diseaseResist=data[0].diseaseResist;
          // this.plant.initDatePlant=data[0].initDatePlant.substring(0, 10);
          this.plant.initDatePlant=this.formatoFecha(data[0].initDatePlant);
          console.log(this.plant.initDatePlant);

          this.plant.finDatePlant=data[0].finDatePlant;
          this.plant.initDateBloom=data[0].initDateBloom;
          this.plant.finDateBloom=data[0].finDateBloom;
          this.plant.initDateHarvest=data[0].initDateHarvest;
          this.plant.finDateHarvest=data[0].finDateHarvest;
          this.plant.leaveType=data[0].leaveType;
        },
      error => {
        console.error(error);
        localStorage.clear();
        sessionStorage.clear();
      //  this._route.navigate(['/login']);
      });

    }

  formatoFecha(fecha){
    let fech=new Date(fecha);
    fech.setDate(fech.getDate()+1);
    var anno=fecha.getFullYear();
    var mes= fecha.getMonth();
    var dia= fecha.getDate();
    mes = (mes < 10) ? ("0" + mes) : mes;
    dia = (dia < 10) ? ("0" + dia) : dia;
    var fechaFinal = new Date(dia+'/'+mes+'/'+2018);
    return (fechaFinal);
    //return fech;
 }

  ngOnInit() {
    this.mostrar();
    this.mostrarFamilias();
    this.managePhoto();
  }
}
