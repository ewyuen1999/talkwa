import { Component, OnInit, AfterViewInit } from '@angular/core';
import {  Params }   from '@angular/router';

import { Schedule } from "../models/schedule"; 
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


prevChapter()
{
    if (this.currentIndex > 0)
    {
      this.currentIndex--;
      this.currentChapter--;
      this.loadAudio(this.currentIndex);
    }
}

nextChapter()
{
    if (this.currentIndex < this.audioUrls.length - 1)
    {
      this.currentIndex++;
      this.currentChapter++;
    this.loadAudio(this.currentIndex);
    }
}

playNextChapter($event)
{
   let entry = this.configurationService.currentReading;

  if (this.currentChapter !=  entry.endChapter)
  {
    this.autoPlay = true;
    this.nextChapter();
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
    let entry = this.configurationService.currentReading;
    let audioBible = this.bibleGateWayToBibleDotCom(bible);
    this.audioUrls = [];
    for (let i = entry.beginChapter; i <= entry.endChapter; i++)
    {
        //let audioDocUrl = this.audioService.bibleDotComUrl(audioBible, entry.book, i);
        let audioDocUrl = this.audioService.getBibleAudioUrl(audioBible, entry.book, i);
        this.audioUrls.push(audioDocUrl);
    }

    this.currentIndex = 0;
    this.currentChapter = entry.beginChapter;
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
      let entry = this.configurationService.currentReading;
      let verseCount = this.scheduleService.getBookChapterVerseCount2(entry.book, this.currentChapter);
      this.startTime = this.getStartTime(audioLength, verseCount);
      this.endTime = this.getEndTime(audioLength, verseCount);
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

  getStartTime(audioLength: number, verseCount: number) : number
  {
    if (this.configurationService.guessAudioPosition)
    {
      let entry = this.configurationService.currentReading;
      
      if (entry.beginChapter == this.currentChapter)
      {
        let start = (entry.beginChapterStartVerse - 1) / verseCount * audioLength; 
        return start;
      }

      if (entry.endChapter == this.currentChapter)
      {
        let start = (entry.endChapterStartVerse - 1) / verseCount * audioLength; 
        return start;
      }
    }

    return 0; 
  }

  getEndTime(audioLength: number, verseCount: number) : number
  {
    if (this.configurationService.guessAudioPosition)
    {
      let entry = this.configurationService.currentReading;
      
      if (entry.beginChapter == this.currentChapter)
      {
        if (entry.beginChapterEndVerse == verseCount)
        {
          return audioLength;
        }
        return entry.beginChapterEndVerse / verseCount * audioLength; 
      }

      if (entry.endChapter == this.currentChapter)
      {
        if (entry.endChapterEndVerse == verseCount)
        {
          return audioLength;
        }
        return (entry.endChapterEndVerse - 1) / verseCount * audioLength; 
      }
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
