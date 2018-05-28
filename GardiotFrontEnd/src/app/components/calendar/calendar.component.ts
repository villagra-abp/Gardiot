import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TaskService } from "../../services/task.service";
import { Task } from "../../classes/task.class";
import { UserService } from "../../services/user.service";
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
    primary: '#25b5aa',
    secondary: 'rgba(0,0,0,0.04)'
  },
  yellow: {
    primary: '#ffb200',
    secondary: 'rgba(0,0,0,0.04)'
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

  public view: string = 'week';
  public viewDate: Date = new Date();
  public locale: string = 'es';
  public weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  public weekendDays: number[] = [DAYS_OF_WEEK.SATURDAY, DAYS_OF_WEEK.SUNDAY];
  public tasks: any[] = [];
  public task = new Task();
  public treatments: any[] = [];
  public treatment = new Task();
  public monthsLoaded: string[] = [];
  public contador: number = 0;
  public photoURL = '';
  public actions: CalendarEventAction[] = [
    {
      label: '<i class="material-icons myicon">check</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        //this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Done', event, undefined);
      }
    },
    {
      label: '<i class="material-icons myicon">close</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Done', event, undefined);
      }
    }
  ];
  public doneActions: CalendarEventAction[] = [
    {
      label: '<i class="material-icons myicon">check</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        //this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Done', event, undefined);
      }
    }
  ];
  public undoneActions: CalendarEventAction[] = [
    {
      //label: '<i class="material-icons">close</i>',
      label: '<i class="material-icons myicon">close</i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        //this.events = this.events.filter(iEvent => iEvent !== event);

        this.handleEvent('Undone', event, undefined);
      }
    }
  ];

  public refresh: Subject<any> = new Subject();
  public events: CalendarEvent[] = [
  ];

  public activeDayIsOpen: boolean = true;

  constructor(
    public _taskService: TaskService,
    public _route: Router,
    public _appComponent: AppComponent,
    public _userService: UserService,
    public datePipe: DatePipe,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    if (window.location.toString().indexOf("localhost") >= 0) {
      this.photoURL = "/assets";
    }
    else if (window.location.toString().indexOf("gardiot") >= 0) {
      this.photoURL = "/app/assets";
    }
  }


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
      (Ttitle.indexOf('Regar') >= 0 ? color = colors.blue : color = colors.yellow);
      if(new Date(Tstart)<=new Date()){
        actions = this.doneActions;
      }else{
        actions = undefined;
      }

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
      this.dialog.open(DialogTaskComponent, { width: '800px', height: '800px', data: { id: 1 } });
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
          event.draggable = true;
          event.actions = this.doneActions;
          event.color = colors.yellow;
          this.refresh.next();
        });
    }
    else if (action == 'Changed') {
      let task = this.tasks[event.id];
      this._taskService.moveTask(task.mPlant, task.myPlant, task.tPlant, task.treatmentPlant, oldDate, this.datePipe.transform(event.start.toString(), 'yyyy-MM-dd'))
        .subscribe(data => {
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
              window.setTimeout(function() {
                hidePopover(window.pop);
              }, 4000);
            }

          }
        });
    }
    else {
      let task = this.tasks[event.id];
      this.dialog.open(DialogTaskComponent, { width: '800px', height: 'auto', data: { mPlant: task.mPlant, myPlant: task.myPlant, tPlant: task.tPlant, treatmentPlant: task.treatmentPlant } });
    }

  }

  mostrar() {
    let f = new Date();
    let fechas = [];
    fechas[0] = this.datePipe.transform(f, 'yyyy-MM');
    f.setMonth(f.getMonth() - 1);
    fechas[1] = this.datePipe.transform(f, 'yyyy-MM');
    f.setMonth(f.getMonth() + 2);
    fechas[2] = this.datePipe.transform(f, 'yyyy-MM');
    for (let i = 0; i < fechas.length; i++) {
      this._taskService.detailsAll(fechas[i])
        .subscribe(data => {
          this.monthsLoaded.push(fechas[i]);
          for (let key$ in data) {
            this.tasks.push(data[key$]);
            if (data[key$].name == 'Regar') {
              this.addEvent('<img src="' + this.photoURL + '/images/icon/regar.png" class=" icontarea" alt="Regar">' + " " + data[key$].commonName,
                this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
                this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
                parseInt(key$),
                data[key$].dateDone != null);
            } else if (data[key$].name == 'Fertilizar') {
              this.addEvent('<img src="' + this.photoURL + '/images/icon/fertilizar.png" class="icontarea" alt="Fertilizar">' + " " + data[key$].commonName,
                this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
                this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
                parseInt(key$),
                data[key$].dateDone != null);
            } else if (data[key$].name == 'Podar') {
              this.addEvent('<img src="' + this.photoURL + '/images/icon/podar.png" class="icontarea" alt="Podar">' + " " + data[key$].commonName,
                this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
                this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
                parseInt(key$),
                data[key$].dateDone != null);
            } else if (data[key$].name == 'Recolectar') {
              this.addEvent('<img src="' + this.photoURL + '/images/icon/cosechar.png" class="icontarea" alt="Recolectar">' + " " + data[key$].commonName,
                this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
                this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
                parseInt(key$),
                data[key$].dateDone != null);
            } else if (data[key$].name == 'Fumigar') {
              this.addEvent('<img src="' + this.photoURL + '/images/icon/fumigar.png" class=" icontarea" alt="Fumigar">' + " " + data[key$].commonName,
                this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
                this.datePipe.transform(data[key$].date, 'yyyy-MM-dd'),
                parseInt(key$),
                data[key$].dateDone != null);
            }
          }
        },
          error => {
            console.error(error);
          });
    }

  }
  changeMonth() {
    let dates = [];
    let f = new Date(this.datePipe.transform(this.viewDate, 'yyyy-MM'));
    f.setMonth(f.getMonth() - 1);
    for (let i = 0; i < 3; i++) {
      let month = this.datePipe.transform(f, 'yyyy-MM');
      let exists = false;
      for (let j = 0; j < this.monthsLoaded.length && !exists; j++) {
        if (this.monthsLoaded[j] == month) {
          exists = true;
        }
      }
      if (!exists) {
        dates.push(month);
        this.monthsLoaded.push(month);
      }
      f.setMonth(f.getMonth() + 1);
    }
    if (dates.length > 0) {
      for (let i = 0; i < dates.length; i++) {
        this._taskService.detailsAll(dates[i])
          .subscribe(data => {
            for (let key$ in data) {
              this.tasks.push(data[key$]);
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
  }

  checkAdmin() {
    this._userService.isUserAdmin()
      .subscribe(data => {
        if (data) {
          this._route.navigate(['/admin/statistics']);
        }
      });
  }

  ngOnInit() {
    this.checkAdmin();
    this.mostrar();
  }
}
