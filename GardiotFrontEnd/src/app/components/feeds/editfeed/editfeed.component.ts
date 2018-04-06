import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { NgForm } from "@angular/forms";
import { FeedService } from "../../../services/feed.service";
import { Feed } from "../../../classes/feed.class";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editfeed',
  templateUrl: './editfeed.component.html',
  styleUrls: ['./editfeed.component.css']
})
export class EditfeedComponent implements OnInit {

  feed=new Feed();
  private feeds:any[]=[];

  constructor(
    private _feedService:FeedService,
    private _appComponent:AppComponent,
    private _router: ActivatedRoute,
    private _route:Router,
  ) { }

  guardar(){
    this._feedService.save(this.feed)
        .subscribe(data=>{
            this._appComponent.mensajeEmergente("El consejo se ha guardado", "primary", "admin/feeds?pag=1");
        },
        error=>{
          let v=JSON.parse(error._body);
          this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
        });
  }

  getID(){
    this._router.params.subscribe(params => {
      if(params['id']!=null){
        this.feed=new Feed(params['id']);
        this.mostrar(this.feed.id);
      }else{
        this._route.navigate(['/treatments']);
      }
    });
  }

  mostrar(idFeed: number){
    this._feedService.details(idFeed)
        .subscribe(data=>{
          this.feed.id=idFeed;
          this.feed.name=data[0].name;
          this.feed.text=data[0].text;
          this.feed.dateInit=data[0].dateInit;
          this.feed.dateFinal=data[0].dateFinal;
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
