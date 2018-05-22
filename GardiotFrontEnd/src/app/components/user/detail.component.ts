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
  public user = new User("");
  public gardenRoute = "";
  public feeds: any[] = [];
  public feed = new Feed();
  public garden = new Garden("");
  public tasks: any[] = [];
  public task = new Task();
  public refresh: Subject<any> = new Subject();
  public events: CalendarEvent[] = [];
  public sunrise;
  public sunset;
  public tareas:any[] = [];
  public checkTareas = false;
  public photoURL = "";
  private imgUrl ="";
  public temperature = 0;
  public plantNumber = 0;
  private percentTareas= 0;
  private fecha_actual="";
  private fecha_hoy=new Date();


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
      this.imgUrl="http://localhost:4200/assets/images/imgProfile/";
    }
    else if(window.location.toString().indexOf("gardiot")>=0){
      this.photoURL="/app/assets";
      this.imgUrl="https://gardiot.ovh/app/assets/images/imgProfile/";
    }
    else{
      this.photoURL="/assets";
      this.imgUrl="http://192.168.100.3:4200/assets/images/imgProfile/";
    }
  }
//------ comprobamos si es su primera vez en la app------//
  checkGarden() {
    this._gardenService.firstgarden().subscribe(data => {
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
        new iniciar("home", this.garden, this.sunrise, this.sunset);

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
          }else{
            new iniciar("home", this.garden);
          }

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


// calendario
  getTasks(){
    this.tareas = [];
    let f = new Date();
    f.getDate();
    f.getMonth() + 1;
    f.getFullYear();
    this.fecha_actual = this.datePipe.transform(f, 'yyyy-MM-dd');
    this.fecha_hoy=f;
          this._taskService.percent().subscribe(data => {
            this.percentTareas= data.Mensaje;
          },
            error => {
              console.error(error);
            });
    this._taskService.detailsSome(15).subscribe(data =>{
      let aux:any[] = [];
      if(data.length !=0){
        for (let i = 0; i<data.length; i++){
          if(aux.length == 0){ // si está vacio
            aux.push(data[i]);
          }else{
              if(this.datePipe.transform(data[i].date , 'yyyy-MM-dd')==this.datePipe.transform(data[i-1].date, 'yyyy-MM-dd') ){ // si las fechas coinciden lo agrupamos
              aux.push(data[i]);
            }else{ // si no, agrupamos, vaciamos el array y metemos el siguiente
              this.tareas.push(aux);
              aux = [];
              aux.push(data[i]);
            }
          }
        } //end if
        this.tareas.push(aux); // se introducen las ultimas tareas del bucle
      }

      this.checkTareas = true;
    },
    error =>{
      console.error(error);
    });

  }

  dotask(tarea:Task){
    this._taskService.DoneTask(tarea.mPlant, tarea.myPlant, tarea.tPlant, tarea.treatmentPlant, this.datePipe.transform(tarea.date.toString(), 'yyyy-MM-dd'), this.fecha_actual)
      .subscribe(data => {
        this.refresh.next();
        this.getTasks();
      });
  }

  // feed
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

    cerrarfeed(id:number) {
      this._feedService.closefeed(id).subscribe(data => {
          this.cargarfeeds();
        },
        error => {
          console.error(error);
        });
    }


  checkAdmin(){
      this._detailService.isUserAdmin()
        .subscribe(data => {
          if(data){
            this._route.navigate(['/admin/statistics']);
          }
        });
  }

  ngOnInit() {
    this.checkAdmin();
    this.checkGarden();
    this.mostrar2();
    this.getTasks();
    this.cargarfeeds();
  }


}
