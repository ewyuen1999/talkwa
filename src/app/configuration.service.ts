import { Injectable, EventEmitter, Output } from '@angular/core';
import { WindowService } from './window.service';
import { ScheduleEntry } from './models/schedule-entry';

@Injectable()
export class ConfigurationService {

  @Output() dateUpdated = new EventEmitter();
  currentBible  : string;
  currentDate: Date;
  currentReading: ScheduleEntry;
  currentVerses : string;
  guessAudioPosition: boolean;

  constructor(private window : WindowService) {
    let bible = this.window.nativeWindow.localStorage.getItem("currentBible"); 
    if (bible === null)
    {
      this.setCurrentBible("NIV")
    }
    else
    {
      this.setCurrentBible(bible)
    }

//    let guess : boolean = this.window.nativeWindow.localStorage.getItem("guessAudioPosition") === "true";
    let guess: boolean = true; 
    if (guess === null)
    {
      this.setGuessAudioPosition(true);
    }
    else
    {
       this.setGuessAudioPosition(guess);
    }

    this.currentDate = new Date();
  }

    setCurrentBible(bible : string)
    {
      if (this.currentBible !== bible)
      {
        this.currentBible = bible;
        this.window.nativeWindow.localStorage.setItem("currentBible", bible);
      }
    }

    setGuessAudioPosition(guess: boolean)
    {
      if (this.guessAudioPosition !== guess)
      {
        this.guessAudioPosition = guess;
        this.window.nativeWindow.localStorage.setItem("guessAudioPosition", guess);
      }
    }

    setCurrentDate(date : Date)
    {
       if (this.currentDate === date)
       {
         return;
       }
       this.currentDate = date;
       this.dateUpdated.emit(date);
    }

    setCurrentReading(entry: ScheduleEntry)
    {
      this.currentReading = entry;
    }

    setCurrentVerse(verses : string)
    {
      this.currentVerses = verses;
    }

}
