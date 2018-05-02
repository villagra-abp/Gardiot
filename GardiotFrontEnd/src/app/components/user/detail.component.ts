import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from '../../classes/user.class';
import { UserService } from "../../services/user.service";
import { TaskService } from "../../services/task.service";
import { FeedService } from "../../services/feed.service";
import { Task } from "../../classes/task.class";
import { Feed } from "../../classes/feed.class";
import { GardenService } from "../../services/garden.service";
import { Garden } from "../../classes/garden.class";
import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarDateFormatter,
  DAYS_OF_WEEK
} from 'angular-calendar';

import { CustomDateFormatter } from '../calendar/customdate.provider';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

declare var iniciar: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class DetailComponent implements OnInit {
  view: string = 'week';
  locale: string = 'es';
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  weekendDays: number[] = [DAYS_OF_WEEK.SATURDAY, DAYS_OF_WEEK.SUNDAY];

  viewDate: Date = new Date();
  private user = new User("");
  private gardenRoute = "";
  private feeds: any[] = [];
  private feed = new Feed();
  private garden = new Garden("");
  private tasks: any[] = [];
  private task = new Task();
  private refresh: Subject<any> = new Subject();
  private events: CalendarEvent[] = [];
  private sunrise;
  private sunset;

  constructor(
    private _detailService: UserService,
    private _gardenService: GardenService,
    private _route: Router,
    private _taskService: TaskService,
    private _feedService: FeedService,
    private datePipe: DatePipe,

  ) { }

  //Recoge los datos del usuario logueado y los guarda para mostrarlos
  mostrar() {
    this._detailService.details(this.user)
      .subscribe(data => {
        this.user.id = data.id;
        this.user.birthDate = data.birthDate;
        this.user.photo = data.photo;
        this.user.name = data.name;
      },
      error => {
        console.error(error);
        localStorage.clear();
        sessionStorage.clear();
        this._route.navigate(['/login']);
      });
  }

  getTiempo() {
    this._gardenService.tiempo(this.garden)
      .subscribe(data => {
        var sunrise = new Date();
        var sunset = new Date();
        sunrise.setTime(data.sys.sunrise * 1000);
        this.sunrise = sunrise;

        sunset.setTime(data.sys.sunset * 1000);
        this.sunset = sunset;

      },
      error => {
        console.error(error);
        localStorage.clear();
        sessionStorage.clear();
        this._route.navigate(['/login']);
      });
  }

  mostrar2() {
    this._gardenService.details()
      .subscribe(data => {
        if (data != null) {
          this.garden.id = data.id;
          this.garden.title = data.title;
          this.garden.width = data.width;
          this.garden.length = data.length;
          this.garden.longitude = data.longitude;
          this.garden.latitude = data.latitude;
          this.garden.soil = data.soil;
          this.garden.user = data.user;
          this.garden.countryCode = data.countryCode;
          this.garden.city = data.city;
          this.garden.plants = data.plants;
          if (typeof this.garden.city !== undefined && this.garden.city != null) {
            this.getTiempo();
          }
          new iniciar("home", this.garden, this.sunrise, this.sunset);
        } else {
          this._route.navigate(['/newgarden']);
        }

      },
      error => {
        if (JSON.parse(error._body).Mensaje == 'No existe') {
          this._route.navigate(['/newgarden']);
        } else {
          this._route.navigate(['/detail']);
        }
      });
  }

  checkGarden() {
    this._gardenService.firstgarden().subscribe(data => {
        if (data == "Existe") {
          this.gardenRoute = '/garden';
        } else {
          this.gardenRoute = '/newgarden?pag=1';
        }
      },
      error => {
        console.error(JSON.parse(error._body).Mensaje);
      });
  }

  cargarfeeds() {
    this._feedService.showfeeds()
      .subscribe(data => {
        this.feeds = [];
        for (let key$ in data) {
          this.feeds.push(data[key$]);
        }
      },
      error => {
        console.error(error);
      });
  }

  mostrartask() {
    let f = new Date();
    let fecha_actual: string;
    f.getDate();
    f.getMonth() + 1;
    f.getFullYear();
    fecha_actual = this.datePipe.transform(f, 'yyyy-MM-dd');
    this._taskService.detailsAll(fecha_actual)
      .subscribe(data => {
        this.tasks = [];
        for (let key$ in data) {
          this.addEvent(data[key$].name + " " + data[key$].commonName, this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'), this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'));
        }
      },
      error => {
        console.error(error);
      });
  }

  cerrarfeed(id:number) {
    this._feedService.closefeed(id)
      .subscribe(data => {
      },
      error => {
        console.error(error);
      });
  }

  addEvent(Ttitle: string, Tstart: string, Tend: string): void {
    this.events.push({
      title: Ttitle,
      start: startOfDay(new Date(Tstart)),
      end: endOfDay(new Date(Tend)),
      color: colors.red,
      draggable: false,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }

  ngOnInit() {
    this.checkGarden();
    this.mostrar();
    this.mostrar2();
    this.mostrartask();
    this.cargarfeeds();

  }


}
