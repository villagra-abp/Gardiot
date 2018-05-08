import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { NgForm } from "@angular/forms";
import { FeedService } from "../../../services/feed.service";
import { Feed } from "../../../classes/feed.class";

@Component({
  selector: 'app-newfeed',
  templateUrl: './newfeed.component.html',
  styleUrls: ['./newfeed.component.css']
})
export class NewfeedComponent implements OnInit {

  feed = new Feed();
  private feeds: any[] = [];

  constructor(
    private _feedService: FeedService,
    private _appComponent: AppComponent,
  ) { }

  guardar() {
    this._feedService.save(this.feed)
      .subscribe(data => {
        this._appComponent.mensajeEmergente("El consejo se ha guardado", "primary", "admin/feeds?pag=1");
      },
      error => {
        let v = JSON.parse(error._body);
        this._appComponent.mensajeEmergente(v.Mensaje, "danger", "");
      });
  }

  ngOnInit() {
  }

}
