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
  styleUrls: ['detail.component.css'],
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
  private tareas:any[] = [];
  private photoURL = "";
  private temperature = 0;
  private plantNumber = 0;


  constructor(
    public _detailService: UserService,
    public _gardenService: GardenService,
    public _route: Router,
    public _taskService: TaskService,
    public _feedService: FeedService,
    public datePipe: DatePipe,

  ) {
    if(window.location.toString().indexOf("localhost")>=0){
      this.photoURL="/assets";
    }
    else if(window.location.toString().indexOf("gardiot")>=0){
      this.photoURL="/app/assets";
    }}
//------ comprobamos si es su primera vez en la app------//
  checkGarden() {
    this._gardenService.firstgarden().subscribe(data => {
      console.log(data.Mensaje);
        if (data.Mensaje == "Existe") {
        }else{
          this._route.navigate(['/garden'], {queryParams:{pag:'1'}});
        }
      },
      error => {
        console.error(JSON.parse(error._body).Mensaje);
      });
  }

  goGarden(){
    this._route.navigate(['/garden'], {queryParams:{pag:'1'}});
  }

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
        this.temperature =  data.main.temp -273;

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
          this.plantNumber = this.garden.plants.length;
          if (typeof this.garden.city !== undefined && this.garden.city != null) {
            this.getTiempo();
          }
          new iniciar("home", this.garden, this.sunrise, this.sunset);
        } else {
          // this._route.navigate(['/newgarden']);
        }

      },
      error => {
        if (JSON.parse(error._body).Mensaje == 'No existe') {
          // this._route.navigate(['/newgarden']);
        } else {
          this._route.navigate(['/detail']);
        }
      });
  }



  cargarfeeds() {
    this._feedService.showfeeds()
      .subscribe(data => {
        console.log("entra");
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
    let fechas=[];
    fechas[0] = this.datePipe.transform(f, 'yyyy-MM');
    f.setMonth(f.getMonth()-1);
      this._taskService.detailsAll(fechas[0])
      .subscribe(data => {
        for (let key$ in data) {
          this.tasks.push(data[key$]);
          this.addEvent(data[key$].name + " " + data[key$].commonName,
            this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
            this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'));
        }
      },
        error => {
          console.error(error);
        });

        this._taskService.percent().subscribe(data => {
            console.log(data);
        },
          error => {
            console.error(error);
          });
  }


  cerrarfeed(id:number) {
    this._feedService.closefeed(id)
      .subscribe(data => {
        this.cargarfeeds();
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

  getTasks(){
    this.tareas = [];
    this._taskService.detailsSome(30)
    .subscribe(data =>{

      let aux:any[] = [];



      for (let i = 0; i<data.length; i++){

        if(aux.length == 0){ // si está vacio
          aux.push(data[i]);
        }else{
          if(data[i].date == data[i-1].date){ // si las fechas coinciden lo agrupamos
            aux.push(data[i]);
          }else{ // si no, agrupamos, vaciamos el array y metemos el siguiente
            this.tareas.push(aux);
            aux = [];
            aux.push(data[i]);
          }
        }
      } //end if
      this.tareas.push(aux); // se introducen las ultimas tareas del bucle

    },
    error =>{
      console.error(error);
    });
  }

  dotask(tarea:Task){
    let f = new Date();
    let fecha_actual: string;
    f.getDate();
    f.getMonth() + 1;
    f.getFullYear();
    fecha_actual = this.datePipe.transform(f, 'yyyy-MM-dd');
    this._taskService.DoneTask(tarea.mPlant, tarea.myPlant, tarea.tPlant, tarea.treatmentPlant, this.datePipe.transform(tarea.date.toString(), 'yyyy-MM-dd'), fecha_actual)
      .subscribe(data => {
        this.refresh.next();
        this.getTasks();
      });

  }

  ngOnInit() {
    this.checkGarden();
    this.mostrar();
    this.mostrar2();
    this.mostrartask();
    this.getTasks();
    this.cargarfeeds();

  }


}
