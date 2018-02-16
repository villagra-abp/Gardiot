import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-eventdata',
  templateUrl: './eventdata.component.html'

})
export class EventdataComponent implements OnInit {

  constructor(private _editUserService:UserService,
  private _appComponent:AppComponent,
  private _router: ActivatedRoute,
  private _route:Router ) { }

  ngOnInit() {
  }

}
