import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { NgForm } from "@angular/forms";
import { FeedService } from "../../../services/feed.service";
import { Feed } from "../../../classes/feed.class";
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editfeed',
  templateUrl: './editfeed.component.html',
  styleUrls: ['./editfeed.component.css']
})
export class EditfeedComponent implements OnInit {

  feed = new Feed();
  private feeds: any[] = [];

  constructor(
    private _feedService: FeedService,
    private _appComponent: AppComponent,
    private _router: ActivatedRoute,
    private _route: Router,
    private datePipe: DatePipe,
  ) { }


  guardar() {
    console.log('entro');
    console.log(this.feed);
    this._feedService.modify(this.feed)
      .subscribe(data => {
        this._appComponent.mensajeEmergente("El consejo se ha modificado", "primary", "admin/feeds?pag=1");
      },
      error => {
        let v = JSON.parse(error._body);
        this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
      });
  }

  getID() {
    this._router.params.subscribe(params => {
      if (params['id'] != null) {
        this.feed = new Feed(params['id']);
        this.mostrar(this.feed.id);
      } else {
        this._route.navigate(['/feeds']);
      }
    });
  }

  mostrar(idFeed: number) {
    console.log(idFeed);
    this._feedService.details(idFeed)
      .subscribe(data => {
        this.feed.id = idFeed;
        this.feed.name = data[0].name;
        this.feed.text = data[0].text;
        this.feed.dateInit = this.datePipe.transform(data[0].dateInit, 'yyyy-MM-dd');
        this.feed.dateFinal = this.datePipe.transform(data[0].dateFinal, 'yyyy-MM-dd');
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
