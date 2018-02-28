import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { PlantService } from "../../services/plant.service";
import { Plant } from "../../classes/plant.class";
import { Family } from "../../classes/family.class";
import { AppComponent } from "../../app.component";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Ng2ImgMaxService} from 'ng2-img-max';


@Component({
  selector: 'app-plantdata',
  templateUrl: './plantdata.component.html'

})
export class PlantdataComponent implements OnInit {
  plant=new Plant("");
  private plants:any[]=[];
  private families:any[]=[];
  uploader:FileUploader;

  constructor(
    private _plantService:PlantService,
    private _route:Router,
    private _appComponent:AppComponent,
    private _ng2ImgMax:Ng2ImgMaxService
    ) { }

    guardar(){
      console.log(this.plant);
      this._plantService.save(this.plant)
          .subscribe(data=>{

              this._appComponent.mensajeEmergente("La planta se ha guardado", "primary", "admin/plantdata");

          },
          error=>{
            let v=JSON.parse(error._body);
            console.log(v.Mensaje);
            this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
          });
    }


    mostrar(){
      this._plantService.detailsAll()
          .subscribe(data=>{
            for(let key$ in data){
              this.plants.push(data[key$]);
            }
          },
        error => {
          console.error(error);
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

      uploadPhoto(event){
        if(this.uploader.getNotUploadedItems().length){
          console.log(event.target.files);
          let file=[];
          file.push(event.target.files[0]);
          file.forEach(function(){
            console.log(file);
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

  ngOnInit() {
    this.mostrar();
    this.mostrarFamilias();
    this.uploader=new FileUploader({url: this._plantService.apiURL+'uploadPlant', itemAlias: 'photo'});

    this.uploader=new FileUploader({url: this._plantService.apiURL+'uploadPlant', itemAlias: 'photo'});
this.uploader.onAfterAddingFile = (file)=> {
      file.withCredentials = false;
    };

    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
         console.log("ImageUpload:uploaded:", item, status, response);
         let url=response.split(" ");
         url=url[url.length-1];
         url=url.split("\\");
         url=url[url.length-1];
         this.plant.photo='assets/images/imgPlant/'+url;
         this.guardar();
         };
  }

}
