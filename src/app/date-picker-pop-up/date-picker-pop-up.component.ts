import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

@Component({
  selector: 'app-date-picker-pop-up',
  templateUrl: './date-picker-pop-up.component.html',
  styleUrls: ['./date-picker-pop-up.component.css']
})
export class DatePickerPopUpComponent implements OnInit {
  model : any;
  constructor(private configurationService: ConfigurationService) {
    this.model = this.dateToModel(this.configurationService.currentDate);
   }

  triggerUpdate(date : any ) {
    try {
    var dateObject = new Date(date.year, date.month - 1, date.day);
    this.configurationService.setCurrentDate(dateObject);
    }
    catch(ex) {
      console.log("invalid date");
    }
  }

  dateToModel(date: Date) : any
  {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    }
  }

  ngOnInit() {
       this.configurationService.dateUpdated.asObservable().subscribe(
       (date : Date) => {
          this.model = this.dateToModel(this.configurationService.currentDate);
       },
       
       err => {
         console.log(err);
       }
       );
  }

}
