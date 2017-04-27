import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ScheduleEntry } from "./models/schedule-entry"; 

declare var parseXml: (type: string) => void;

@Injectable()
export class UtilitiesService {

  constructor(private http: Http) { }

readFile(xmlfile) 
{
  return this.http.get(xmlfile).map( 
    res => {
              var text = res.text(); 
              var parser = new DOMParser();
              let xmlDoc = parser.parseFromString(text,"text/xml");
              return xmlDoc;
      })
}

readJsonFile(jsonfile) 
{
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.get(jsonfile, options).map( 
    res => {
              return res.json();
      })  
}

  parseSchedule(entryString: string) : ScheduleEntry
  {
    let spaceIndex= entryString.indexOf(" ");
    let colonIndex= entryString.indexOf(":");
    let secondColonIndex = entryString.lastIndexOf(":");
    if (secondColonIndex === colonIndex)
    {
      secondColonIndex = -1;
    }

    let dashIndex= entryString.indexOf("-");
    let secondDashIndex= entryString.lastIndexOf("-");
    if (dashIndex === secondDashIndex)
    {
      secondDashIndex = -1;
    }

    let entry = new ScheduleEntry();
    entry.book = entryString.substr(0, spaceIndex);
    entry.beginChapter = Number(entryString.substr(spaceIndex, colonIndex - spaceIndex));
    if (entry.beginChapter == 0)
    {
        entry.beginChapter = 1;
    }

    // get chapters
    if (dashIndex == -1)
    {
      entry.endChapter = entry.beginChapter;
    } 
    else 
    {  
      if (secondColonIndex != -1)
      {
        entry.endChapter =  Number(entryString.substr(dashIndex + 1, secondColonIndex - dashIndex - 1));
      }
      else
      {
          entry.endChapter = entry.beginChapter;
      }
    }
    if (entry.endChapter == 0)
    {
        entry.endChapter = 1;
    }

    // get verses
    if (dashIndex == -1)
    {
      entry.beginChapterStartVerse = 1;
      entry.beginChapterEndVerse = 1000;
      entry.endChapterStartVerse  = entry.beginChapterStartVerse;
      entry.endChapterEndVerse = entry.beginChapterEndVerse ;
    }
    else
    {
      if (secondDashIndex == -1)
      {
        if (entry.beginChapter == entry.endChapter)
        {
          // e.g. Psalm 145:8-13
          entry.beginChapterStartVerse = Number(entryString.substr(colonIndex + 1, dashIndex -  colonIndex - 1));
          entry.beginChapterEndVerse =  Number(entryString.substr(dashIndex + 1, entryString.length - dashIndex));
          entry.endChapterStartVerse  = entry.beginChapterStartVerse;
          entry.endChapterEndVerse = entry.beginChapterEndVerse ;
        }
        else
        {
          entry.beginChapterStartVerse = Number(entryString.substr(colonIndex + 1, dashIndex -  colonIndex - 1));
          entry.beginChapterEndVerse =  1000;
          entry.endChapterStartVerse  = 1;
          if (secondDashIndex == -1)
          {
             if (secondColonIndex > 0)  
             {
                // e.g. Zechariah 4:1-5:11
                entry.endChapterEndVerse = Number(entryString.substr(secondColonIndex + 1, entryString.length - secondColonIndex));
             }
          }
        }
      }
    }
    

    return entry;
  }
}
