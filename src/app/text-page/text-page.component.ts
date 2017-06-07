import { Component, OnInit, AfterViewInit } from '@angular/core';
import {  Params }   from '@angular/router';

import { Schedule } from "../models/schedule"; 
import { ScheduleEntry } from "../models/schedule-entry"; 
import { AudioEntry } from "../models/audio-entry"; 
import { ScheduleService } from '../schedule.service';
import { ConfigurationService } from '../configuration.service';
import { AudioService } from '../audio.service';
import { UtilitiesService } from '../utilities.service';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-text-page',
  templateUrl: './text-page.component.html',
  styleUrls: ['./text-page.component.css']
})
export class TextPageComponent implements OnInit, AfterViewInit {

  readonly urlTemplate = 'http://www.biblegateway.com/passage/?search={verses}&interface=print';

  verses: string;

  currentAudioUrl : string;
   
  currentIndex: number;
  
  currentChapter : number;

  audioUrls : string[];

  audioEntries : AudioEntry[];

  startTime : number;

  endTime : number;

  iOS : boolean;

  private autoPlay : boolean = false; 

  constructor(   
     private configurationService: ConfigurationService,
     private audioService: AudioService,
    private scheduleService : ScheduleService,
    private utilities : UtilitiesService,
 
) { }

  ngOnInit() {
    this.verses = this.configurationService.currentVerses;
    this.iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  }

  ngAfterViewInit() {
       this.load();
       this.loadAudio(this.currentIndex);
  }


prevEntry()
{
    if (this.currentIndex > 0)
    {
      this.currentIndex--;
      this.configurationService.currentReading =  this.configurationService.allDailyReadings[this.currentIndex];
      this.loadAudio(this.currentIndex);
    }
}

nextEntry()
{
  if (this.currentIndex < this.audioEntries.length - 1)
    {
      this.currentIndex++;
      this.configurationService.currentReading =  this.configurationService.allDailyReadings[this.currentIndex];
      this.loadAudio(this.currentIndex);
    }
}

playNextEntry($event)
{
  if (this.currentIndex < this.audioEntries.length - 1)
  {
    this.autoPlay = true;
    this.nextEntry();
  }
}

bibleGateWayToBibleDotCom(bibleName: string) : number
  {
    switch (bibleName)
    {
      case "KJV":
        return 1;
      case "NIV":
        return 111;
      case "ESV":
        return 59;
      case "CNVT":
        return 40;
      case "CNVS":
        return 41;
      case "CUV":
        return 139;
      case "CUVS":
        return 48;
      case "RVR1960":
        return 149;
      case "VIET":
        return 193;
    }

    return 1;
  }

  load() {
    let bible = this.configurationService.currentBible;
   // let entry = this.configurationService.currentReading;
    let audioBible = this.bibleGateWayToBibleDotCom(bible);
    this.audioUrls = [];
    this.audioEntries = [];
    for (let e of this.configurationService.allDailyReadings)
    {
      this.loadOneEntry(e, audioBible);
    }
    this.currentIndex = 0;
  }

  loadOneEntry(entry: ScheduleEntry, audioBible: number) {

    for (let i = entry.beginChapter; i <= entry.endChapter; i++)
    {
        let audioDocUrl = this.audioService.getBibleAudioUrl(audioBible, entry.book, i);
        this.audioUrls.push(audioDocUrl);
        let audioEntry = new AudioEntry();
        audioEntry.book = entry.book;
        audioEntry.chapter = i;
        if (i === entry.beginChapter)
        {
          audioEntry.startVerse = entry.beginChapterStartVerse;
          audioEntry.endVerse = entry.beginChapterEndVerse;
          audioEntry.url = audioDocUrl;
        }
        else
        if (i === entry.endChapter)
        {
          audioEntry.startVerse = entry.endChapterStartVerse;
          audioEntry.endVerse = entry.endChapterEndVerse;
          audioEntry.url = audioDocUrl;
        }
        else
        {
          audioEntry.chapter = i;
          audioEntry.startVerse = 1;
          audioEntry.endVerse = 1000;
          audioEntry.url = audioDocUrl;
        }
        
        this.audioEntries.push(audioEntry);
    }
  }

  loadAudio(index : number)
  {
        this.audioService.getAudioUrl(this.audioUrls[index]).subscribe(
        text  => {  
          let audioElement = <HTMLAudioElement>document.getElementById("audioElement");
          this.currentAudioUrl = text;
          audioElement.src = this.currentAudioUrl;
        },
      error => console.error('Error: ' + error),
      () => console.log('Completed : ', this.currentAudioUrl)
    ); 
  }

  setStartPosition($event)
  {
     try 
     {
      let audioElement = <HTMLAudioElement>$event.srcElement;
      let audioLength : number = audioElement.seekable.end(0);
      let entry = this.audioEntries[this.currentIndex];
      let verseCount = this.scheduleService.getBookChapterVerseCount2(entry.book, entry.chapter);
      this.startTime = this.getStartTime(audioLength, verseCount, entry);
      this.endTime = this.getEndTime(audioLength, verseCount, entry);
      audioElement.currentTime = this.startTime;
      if (this.autoPlay)
      {
        this.autoPlay = false;
        audioElement.play();
      }

      }
      catch (ex)
      {
//       alert("setStartPosition ex=" +  ex);
      }
  }

  getStartTime(audioLength: number, verseCount: number, entry : AudioEntry) : number
  {
    if (this.configurationService.guessAudioPosition)
    {
        let start = (entry.startVerse - 1) / verseCount * audioLength; 
        return start;
    }

    return 0; 
  }

  getEndTime(audioLength: number, verseCount: number, entry : AudioEntry) : number
  {
    if (this.configurationService.guessAudioPosition)
    {
        if (entry.endVerse == verseCount)
        {
          return audioLength;
        }
        return (entry.endVerse) / verseCount * audioLength; 
    }

    return 1000; 
  }

  restrictAudio($event) {
    try
    {
      let audioElement = <HTMLAudioElement>$event.srcElement;

    if (audioElement.currentTime > this.endTime) {
      audioElement.pause();
      this.endTime = 1000;
    }
    }
    catch (ex)
    {
  //    alert("restrict ex=" +  ex);
    }
  }

 
}
