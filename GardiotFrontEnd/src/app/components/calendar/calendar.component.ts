import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TaskService } from "../../services/task.service";
import { Task } from "../../classes/task.class";
import { Treatment } from "../../classes/treatment.class";
import { AppComponent } from "../../app.component";
import { RouterLink, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DialogTaskComponent } from './dialog-task/dialog-task.component';
import { MatDialog } from '@angular/material';
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
import { CustomDateFormatter } from './customdate.provider';
declare var showPopover: any;
declare var hidePopover: any;
declare var window: any;


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
  },
  green: {
    primary: '#009900',
    secondary: '#99ff99'
  }
};

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['calendar.component.css'],
  templateUrl: 'calendar.component.html',
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class CalendarComponent implements OnInit {

  view: string = 'month';
  viewDate: Date = new Date();

  locale: string = 'es';

  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  weekendDays: number[] = [DAYS_OF_WEEK.SATURDAY, DAYS_OF_WEEK.SUNDAY];

  public tasks: any[] = [];
  public task = new Task();
  public treatments: any[] = [];
  public treatment = new Task();
  public monthsLoaded: string[] = [];
  public contador: number=0;






  actions: CalendarEventAction[] = [
    /*{
      label: '<i class="fa fa-fw fa-pencil">Detalles</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
      this.handleEvent('Edited', event);
      }
    },*/
    {
      label: '<i class="material-icons">check</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        //this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Done', event, undefined);
      }
    },
    {
      label: '<i class="material-icons">close</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Done', event, undefined);
      }
    }
  ];
  doneActions: CalendarEventAction[] = [
    {
      label: '<i class="material-icons">check</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        //this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Done', event, undefined);
      }
    }
  ];
  undoneActions: CalendarEventAction[] = [
    {
      //label: '<i class="material-icons">close</i>',
      label: '<i class="material-icons">close</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        //this.events = this.events.filter(iEvent => iEvent !== event);

        this.handleEvent('Undone', event, undefined);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    /*{
      start: subDays(startOfDay(new Date()), 1),
      //end: addDays(new Date(), 1),
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
      //end: addDays(endOfMonth(new Date()), 3),
      title: 'Próxima poda de los almendros',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      //end: new Date(),
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
    public _taskService: TaskService,
    public _route: Router,
    public _appComponent: AppComponent,
    public datePipe: DatePipe,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
  ) { }


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
    let oldDate = this.datePipe.transform(event.start.toString(), 'yyyy-MM-dd');
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Changed', event, oldDate);
    this.refresh.next();
  }


  addEvent(Ttitle: string, Tstart: string, Tend: string, idT: number, done: boolean): void {
    let color;
    let actions;
    let drag = false;

    if (done) {
      color = colors.green;
      actions = this.undoneActions;
    }
    else {
      (Ttitle.indexOf('Regar') >= 0 ? color = colors.blue : color = colors.red);
      actions = this.doneActions;
      drag = true;
    }


    this.events.push({
      title: Ttitle,
      id: this.contador,
      start: startOfDay(new Date(Tstart)),
      end: endOfDay(new Date(Tend)),
      color: color,
      actions: actions,
      draggable: drag,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
    this.contador++;

  }

  handleEvent(action: string, event: CalendarEvent, oldDate: string) {

    let f = new Date();
    let fecha_actual: string;
    f.getDate();
    f.getMonth() + 1;
    f.getFullYear();
    fecha_actual = this.datePipe.transform(f, 'yyyy-MM-dd');

    if (action == 'Edited') {
      //console.log('deberias saltar el pop up');
      this.dialog.open(DialogTaskComponent, { width: '800px', data: { id: 1 } });

    }
    else if (action == 'Done') {

      let task = this.tasks[event.id];
      this._taskService.DoneTask(task.mPlant, task.myPlant, task.tPlant, task.treatmentPlant, this.datePipe.transform(event.start.toString(), 'yyyy-MM-dd'), fecha_actual)
        .subscribe(data => {
          event.actions = this.undoneActions;
          event.color = colors.green;
          event.draggable = false;
          this.refresh.next();
        });

    }
    else if (action == 'Undone') {

      let task = this.tasks[event.id];
      this._taskService.undoneTask(task.mPlant, task.myPlant, task.tPlant, task.treatmentPlant, this.datePipe.transform(event.start.toString(), 'yyyy-MM-dd'))
        .subscribe(data => {
          //console.log(data);
          //console.log(event);
          event.draggable = true;
          event.actions = this.doneActions;
          event.color = colors.red;
          this.refresh.next();
        });

    }
    else if (action == 'Changed') {
      //console.log(oldDate);
      let task = this.tasks[event.id];
      this._taskService.moveTask(task.mPlant, task.myPlant, task.tPlant, task.treatmentPlant, oldDate, this.datePipe.transform(event.start.toString(), 'yyyy-MM-dd'))
        .subscribe(data => {
          //console.log(data);
        }, error => {
          event.start = new Date(oldDate);
          event.end = new Date(oldDate);

          this.refresh.next();
          let taskDay = parseInt(oldDate.split('-')[2]).toString();
          let taskMonth = parseInt(oldDate.split('-')[1]);

          let cellsOfCalendar = document.getElementsByClassName('cal-day-number');
          let monthInCalendar = parseInt(this.datePipe.transform(this.viewDate, 'yyyy-MM-dd').split('-')[1]);
          let currentMonth = monthInCalendar - 1;
          let rel = 0;
          for (let i = 0; i < cellsOfCalendar.length; i++) {
            if (cellsOfCalendar[i].innerHTML == '1') {
              rel++;
              currentMonth++;
            }
            let bb;
            if (currentMonth == taskMonth && cellsOfCalendar[i].innerHTML == taskDay) {
              bb = cellsOfCalendar[i].parentElement.getBoundingClientRect();
              window.pop = document.getElementById('popoverError');
              window.pop.style.position = 'absolute';
              window.pop.style.top = bb.top + 'px';
              window.pop.style.left = (bb.left + bb.right) / 2 + 'px';
              showPopover('popoverError');
              window.setTimeout(function () {
                hidePopover(window.pop);
              }, 4000);
            }

          }
        });
    }
    else {
      // alert("click standar");
      let task = this.tasks[event.id];
      // llamada pop Up
      this.dialog.open(DialogTaskComponent, { width: '800px', data: { mPlant: task.mPlant, myPlant: task.myPlant, tPlant: task.tPlant, treatmentPlant: task.treatmentPlant } });
    }

  }

  mostrar() {
    let f = new Date();
    let fechas=[];

    fechas[0] = this.datePipe.transform(f, 'yyyy-MM');
    f.setMonth(f.getMonth()-1);
    fechas[1] = this.datePipe.transform(f, 'yyyy-MM');
    f.setMonth(f.getMonth()+2);
    fechas[2] = this.datePipe.transform(f, 'yyyy-MM');

    for(let i=0; i<fechas.length; i++){

      this._taskService.detailsAll(fechas[i])
      .subscribe(data => {
        this.monthsLoaded.push(fechas[i]);

        //console.log(this.monthsLoaded);

        for (let key$ in data) {
          this.tasks.push(data[key$]);
          //console.log(data[key$], this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'));
          // console.log(data[key$]);
          this.addEvent(data[key$].name + " " + data[key$].commonName,
            this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
            this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
            parseInt(key$),
            data[key$].dateDone != null);
        }

      },
        error => {
          console.error(error);
        });
    }

  }
  changeMonth(){
    let dates=[];
    let f=new Date(this.datePipe.transform(this.viewDate, 'yyyy-MM'));
    f.setMonth(f.getMonth()-1);
    for(let i=0; i<3; i++){
      let month=this.datePipe.transform(f, 'yyyy-MM');
      let exists=false;
      for(let j=0; j<this.monthsLoaded.length && !exists; j++){
        if(this.monthsLoaded[j]==month){
          exists=true;
        }
      }
      if(!exists){
        dates.push(month);
        this.monthsLoaded.push(month);
      }
      f.setMonth(f.getMonth()+1);
    }
    if(dates.length>0){
      for(let i=0; i<dates.length; i++){
        this._taskService.detailsAll(dates[i])
      .subscribe(data => {

        for (let key$ in data) {
          this.tasks.push(data[key$]);
          // console.log(data[key$]);
          this.addEvent(data[key$].name + " " + data[key$].commonName,
            this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
            this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
            parseInt(key$),
            data[key$].dateDone != null);
        }

      },
        error => {
          console.error(error);
        });
      }

    }
    //console.log(this.monthsLoaded);


  }

  ngOnInit() {
    this.mostrar();
  }
}
