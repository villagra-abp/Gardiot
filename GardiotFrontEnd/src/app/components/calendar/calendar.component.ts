import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TaskService } from "../../services/task.service";
import { FeedService } from "../../services/feed.service";
import { Task } from "../../classes/task.class";
import { Feed } from "../../classes/feed.class";
import { Treatment } from "../../classes/treatment.class";
import { AppComponent } from "../../app.component";
import { RouterLink,ActivatedRoute, Params } from '@angular/router';
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
  CalendarEventTimesChangedEvent
} from 'angular-calendar';


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

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['calendar.component.css'],
  templateUrl: 'calendar.component.html'
})
export class CalendarComponent implements OnInit{


  view: string = 'month';
  viewDate: Date = new Date();

  private tasks:any[]=[];
  private task= new Task();

  private treatments:any[]=[];
  private treatment= new Task();

  private feeds:any[]=[];
  private feed= new Feed();





  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        //this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        //this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    /*{
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'Fumigar las margaritas',
      color: colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      title: 'Podar el olivo',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: startOfDay(new Date('2018-04-15')),
      title: 'tarta espacial',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'Próxima poda de los almendros',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'Fumigar las rosas',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }*/
  ];

  activeDayIsOpen: boolean = true;

  constructor(
    private _taskService:TaskService,
    private _feedService:FeedService,
    private _route:Router,
    private _appComponent:AppComponent,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute,

  ) {}


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    //this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }


  addEvent(Ttitle:string, Tstart:string, Tend:string): void {
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

  handleEvent(c, e){
    alert("manejar click");
    console.log(e);
  }

  mostrar(){
    let f = new Date();
    let fecha_actual:string;
    f.getDate();
    f.getMonth() +1;
    f.getFullYear();
    fecha_actual=this.datePipe.transform(f, 'yyyy-MM-dd');
      this._taskService.detailsAll(fecha_actual)
          .subscribe(data=>{
            this.tasks=[];
            for(let key$ in data){
              //console.log(data[key$]);
              //this.tasks.push(data[key$]);
              this.addEvent(data[key$].name+" "+data[key$].commonName, this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'), this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'));
            }
            /*for(let key$ in data){
              this.treatments.push(data[key$]);
            }
            console.log(this.treatments);
            console.log(this.tasks);*/
          },
        error => {
          console.error(error);
        });
  }

  cargarfeeds(){
      this._feedService.showfeeds()
          .subscribe(data=>{
            this.feeds=[];
            for(let key$ in data){
              this.feeds.push(data[key$]);
            }
            console.log("¿cuantos?");
            console.log(this.feeds);
          },
        error => {
          console.error(error);
        });
  }

  ngOnInit() {
    this.mostrar();
    this.cargarfeeds();
  }
}
