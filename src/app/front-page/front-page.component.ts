import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { Schedule } from "../models/schedule"; 


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  	// configuration
    obj : any;

  constructor(private scheduleService: ScheduleService) { }

 ngOnInit() {
	// load data into object
	  this.obj = JSON.parse(this.scheduleService.getSchedulesJson());
 }
}
