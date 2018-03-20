import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TaskService } from "../../services/task.service";
import { Task } from "../../classes/task.class";
import { Treatment } from "../../classes/treatment.class";
import { AppComponent } from "../../app.component";
import { RouterLink,ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  private tasks:any[]=[];
  private task= new Task();

  private treatments:any[]=[];
  private treatment= new Task();

  constructor(
    private _taskService:TaskService,
    private _route:Router,
    private _appComponent:AppComponent,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute,

  ) {}

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
              this.tasks.push(data[key$]);
            }
            for(let key$ in data){
              this.treatments.push(data[key$]);
            }
            console.log(this.treatments);
            console.log(this.tasks);
          },
        error => {
          console.error(error);
        });
  }



  ngOnInit() {
    this.mostrar();
  }

}
