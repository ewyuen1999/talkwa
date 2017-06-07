import { Component, Input, OnInit} from '@angular/core';
import { Router }   from '@angular/router';
import { Location } from '@angular/common';
import { ScheduleService } from '../schedule.service';
import { UtilitiesService } from '../utilities.service';
import { ConfigurationService } from '../configuration.service';
import { Schedule } from "../models/schedule"; 

@Component({
  selector: 'app-daily-reading',
  templateUrl: './daily-reading.component.html',
  styleUrls: ['./daily-reading.component.css']
})
export class DailyReadingComponent implements OnInit {

  readonly urlTemplate = 'http://www.biblegateway.com/passage/?search={verses}&interface=print';

  selectedDate : Date;

  schedule: Schedule;

  readings: string[];

  today: string;

  
  audioUrls: string[];
  

  constructor( 
   private scheduleService : ScheduleService,
   private router: Router,
   private location: Location,
   private utilities: UtilitiesService,
   private configurationService: ConfigurationService) {
   }

   
  clickToday(event)
	{
    this.configurationService.setCurrentDate(new Date());
	}

	clickPrev(event)
	{
    let date = new Date(this.configurationService.currentDate);
    date.setDate(this.configurationService.currentDate.getDate()  - 1);
    this.configurationService.setCurrentDate(date);
	}

	clickNext(event)
	{
    let date = new Date(this.configurationService.currentDate);
    date.setDate(this.configurationService.currentDate.getDate() + 1);
    this.configurationService.setCurrentDate(date);
	}


  clickRead(event , index)
  {
    if (this.readings[index] == "All Passages")
    {
       let allEntries = [] ;
       for (let i = 0; i < this.readings.length - 1; i++) {
         var entry = this.utilities.parseSchedule(this.readings[i]);
         allEntries.push(entry);
       }
       this.configurationService.setAllDailyReading(allEntries);
       this.configurationService.setCurrentReading(allEntries[0]);
       let allPassages = this.readings.join(";");
       let readingUrl = this.urlTemplate.replace('{verses}',  allPassages);
       let url = readingUrl  + "&version=" + this.configurationService.currentBible;
       this.configurationService.setCurrentVerse(url);
       this.router.navigate(['/text']);
    }
    else
    {
    var entry = this.utilities.parseSchedule(this.readings[index]);
    let entries = [] ;
    entries.push(entry);
    this.configurationService.setAllDailyReading(entries);
    this.configurationService.setCurrentReading(entry);
    let readingUrl = this.urlTemplate.replace('{verses}', this.readings[index]);
  
    let url = readingUrl  + "&version=" + this.configurationService.currentBible;
    this.configurationService.setCurrentVerse(url);
    this.router.navigate(['/text']);
    }
  }

  updateDate()
  {
   this.scheduleService.getSchedule1(null, this.selectedDate).then(
    (schedule: Schedule) => { 
        this.schedule = schedule;
        this.today = this.schedule.date;
        let devotions = schedule.devotions;
        devotions.push("All Passages");
        this.readings = devotions;
    }
   )
  }

  ngOnInit() {
    this.configurationService.dateUpdated.asObservable().subscribe(
       (date : Date) => {
          this.selectedDate = date;
          this.updateDate();
       },
       
       err => {
         console.log(err);
       }
    )

		this.selectedDate = this.configurationService.currentDate;
    this.updateDate();
  }


}
