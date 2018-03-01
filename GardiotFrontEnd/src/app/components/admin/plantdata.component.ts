import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { PlantService } from "../../services/plant.service";
import { Plant } from "../../classes/plant.class";
import { Family } from "../../classes/family.class";
import { AppComponent } from "../../app.component";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Ng2ImgMaxService} from 'ng2-img-max';
import { RouterLink,ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-plantdata',
  templateUrl: './plantdata.component.html'

})
export class PlantdataComponent implements OnInit {
  plant=new Plant();
  private plants:any[]=[];
  private families:any[]=[];
  uploader:FileUploader;
  private numeroItems:number;
  private paginaActual:number=1;
  private elementosPorPagina:number=2;

  constructor(
    private _plantService:PlantService,
    private _route:Router,
    private _appComponent:AppComponent,
    private _ng2ImgMax:Ng2ImgMaxService,
    private activatedRoute: ActivatedRoute
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
      this._plantService.detailsAll(this.paginaActual,this.elementosPorPagina)
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

      uploadPhoto(){
        let imgUpl=<HTMLInputElement>document.querySelector('#photo_plant');
        if(this.uploader.getNotUploadedItems().length){
          console.log(imgUpl.files);
          let file=[];
          file.push(imgUpl.files[0]);
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

      searchcontent(){
        this._plantService.searchAll()
        .subscribe(data=>{
          for(let key$ in data){
            this.plants.push(data[key$]);
          }
        },
        error => {
          console.error(error);
        });
      }

      getitems(){
        this._plantService.getNumberItems()
        .subscribe(data=>{
          this.numeroItems=data[0].NUMPLANTAS;
        },
        error => {
          console.error(error);
        });
      }

      ActualizarPagina(){
     this.activatedRoute.params.subscribe((params: Params) => {
         this.paginaActual = params['pag'];
       });
     }


  ngOnInit() {
    this.ActualizarPagina();
    this.mostrar();
    this.mostrarFamilias();
    this.getitems();
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
         this.plant.photo='assets/images/imgPlants/'+url;
         this.guardar();
         };
  }

}
