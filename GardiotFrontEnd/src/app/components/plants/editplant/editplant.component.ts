import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PlantService } from "../../../services/plant.service";
import { Plant } from "../../../classes/plant.class";
import { Family } from "../../../classes/family.class";
import { AppComponent } from "../../../app.component";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Ng2ImgMaxService} from 'ng2-img-max';

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
    this._plantService.details(10)
        .subscribe(data=>{
          console.log(data);
          this.plant.id=data.id;
          this.plant.scientificName=data.scientificName;
          this.plant.commonName=data.commonName;
          this.plant.description=data.description;
          this.plant.family=data.family;
          this.plant.depth=data.depth;
          this.plant.distance=data.distance;
          this.plant.diseaseResist=data.diseaseResist;
          this.plant.initDatePlant=data.initDatePlant;
          this.plant.finDatePlant=data.finDatePlant;
          this.plant.initDateBloom=data.initDateBloom;
          this.plant.finDateBloom=data.finDateBloom;
          this.plant.initDateHarvest=data.initDateHarvest;
          this.plant.finDateHarvest=data.finDateHarvest;
          this.plant.leaveType=data.leaveType;
        },
      error => {
        console.error(error);
        localStorage.clear();
        sessionStorage.clear();
      //  this._route.navigate(['/login']);
      });

    }

  ngOnInit() {
    this.mostrar();
    this.mostrarFamilias();
    this.managePhoto();
  }
}
