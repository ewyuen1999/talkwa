import { Injectable } from '@angular/core';
import { Http,  Headers,  RequestMethod, RequestOptionsArgs, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import { WindowService } from './window.service';


import 'rxjs/add/operator/map';


@Injectable()
export class AudioService {

  readonly audoUrlTemplate = "https://www.bible.com/bible/{bibleId}/{book}.{chapter}";
  readonly audoUrlTemplate2 = "http://192.168.0.113:3579/bible/{bibleId}/{book}/{chapter}";
  readonly audoUrlTemplate3 = "http://talkwanancy.azurewebsites.net/bible/{bibleId}/{book}/{chapter}";
  resultString : string;
  
  constructor(private http: Http, private window: WindowService) { }

getAudioUrl2(doc : HTMLDocument) : string
{
    let audioEle : any;
    audioEle = doc.getElementById("reader_audio_player");
    if (audioEle != null)
    {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(audioEle.outerHTML,"text/xml");
        var audioElements  = xmlDoc.getElementsByTagName("audio");
        if (audioElements.length > 0)
        {
            let res = audioElements[0].getAttribute('src');
            return res;
        }
    }

    return null; 
}


getAudioUrl(audioUrl) 
{
  
  let proxy_url = audioUrl;
  let headers = new Headers();
  
  return this.http.get(proxy_url, {
      headers: headers
    } ).map( 
    res => {
      return res.text(); 
      })
}

 getBibleAudioUrl(bible, book, chapter) : string
 {
     let convertedBook = this.convertBookName(book);
     let url = this.audoUrlTemplate3.replace('{bibleId}', bible);
     url = url.replace('{book}', convertedBook);
     url = url.replace('{chapter}', chapter.toString());
     return url;
 }

convertBookName(bible : string) : string
{
    switch (bible)
    {
      case "Genesis" :
          return "gen";
      case "Exodus" :
          return "exo";
      case "Leviticus" :
          return "lev";
      case "Numbers" :
          return "num";
      case "Deuteronomy" :
          return "deu";
      case "Joshua" :
          return "jos";
      case "Judges" :
          return "jdg";
      case "Ruth" :
          return "rut";
      case "1Samuel" :
          return "1sa";
      case "2Samuel" :
          return "2sa";
      case "1Kings" :
          return "1ki";
      case "2Kings" :
          return "2ki";
      case "1Chronicles" :
          return "1ch";
      case "2Chronicles" :
          return "2ch";
      case "Ezra" :
          return "ezr";
      case "Esther" :
          return "est";
      case "Job" :
          return "job";
      case "Psalm" :
          return "psa";
      case "Proverbs" :
          return "pro";
      case "Ecclesiastes" :
          return "ecc";
      case "Songs" :
          return "sng";     
      case "Isaiah" :
          return "isa";
      case "Lamentations" :
          return "lam";
      case "Ezekiel" :
          return "ezk";
      case "Daniel" :
          return "dan";
      case "Hosea" :
          return "hos";
      case "Joel" :
          return "jol";
      case "Amos" :
          return "amo";
      case "Obadiah" :
          return "oba";
      case "Jonah" :
          return "jon";
      case "Micah" :
          return "mic";
      case "Nahum" :
          return "nam";
      case "Habakkuk" :
          return "hab";
      case "Zephaniah" :
          return "zep";
      case "Haggai" :
          return "hag";
      case "Zechariah" :
          return "zec";
      case "Malachi" :
          return "mal";
      case "Matthew":
          return "mat";
      case "Mark":
          return "mrk";
      case "Luke":
          return "luk";
      case "John":
          return "jhn";
      case "Acts":
          return "act";
      case "Romans":
          return "rom";
      case "1Corinthians":
          return "1co";
      case "2Corinthians":
          return "2co";
      case "Galatians":
          return "gal";
      case "Ephesians":
          return "eph";
      case "Philippians":
          return "php";
      case "Colossians":
          return "col";
      case "1Thessalonians":
          return "1th";
      case "2Thessalonians":
          return "2th";
      case "1Tiomthy":
          return "1ti";
      case "2Tiomthy":
          return "2ti";
      case "Titus":
          return "tit";
      case "Philemon":
          return "phm";
      case "Hebrews":
          return "heb";
      case "James":
          return "jas";
      case "1Peter":
          return "1pe";
      case "2Peter":
          return "2pe";
      case "1John":
          return "1jn";
      case "2John":
          return "2jn";
      case "3John":
          return "3jn";
      case "Jude":
          return "jud";
      case "Revelation":
          return "rev";
    }
    return null;
 }
  callFunction(data){
    console.log(data);
}

}



/*

  bibleDotComUrl(bible, book, chapter) : string
  {
     let convertedBook = this.convertBookName(book);
     let url = this.audoUrlTemplate.replace('{bibleId}', bible);
     url = url.replace('{book}', convertedBook);
     url = url.replace('{chapter}', chapter.toString());
     return url;
  }
 */

/*
getAudioUrl_cors(pageUrl) 
{
  var cors_api_url = "http://localhost:8080"
  var cors_api_url = "https://cors-anywhere.herokuapp.com/"
  let proxy_url = cors_api_url + pageUrl;
  let headers = new Headers();
  
  return this.http.get(proxy_url, {
      headers: headers
    } ).map( 
    res => {
      var text = res.text(); 
               var doc = document.implementation.createHTMLDocument("bibleDotComDoc");
               doc.documentElement.innerHTML = text;
               let audioEle : any;
              audioEle = doc.getElementById("reader_audio_player");
             if (audioEle != null)
             {
               var parser = new DOMParser();
               var xmlDoc = parser.parseFromString(audioEle.outerHTML,"text/xml");
               var audioElements  = xmlDoc.getElementsByTagName("audio");
               if (audioElements.length > 0)
               {
                  let res = audioElements[0].getAttribute('src');
                  return res;
               }
            }
            return "Not Found";
      })
}

*/


/* 
 
  getAudioUrl3(pageUrl)
  {
    $.ajax({
    url: pageUrl,
    dataType: 'jsonp',
    success:function(response){
     this.callFunction(response);
    },
    error:function(err){
        console.log("error=", err);
        alert("ERROR");
        }
    })
    return this.resultString;
  };

 getAudioUrl3b(pageUrl) {
   let con = window.document.getElementById('audiopage')
   ,   xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function (e) { 
    if (xhr.readyState == 4 && xhr.status == 200) {
     con.innerHTML = xhr.responseText;
    }
   }
 xhr.open("GET", pageUrl, true);
 xhr.setRequestHeader('Content-type', 'text/html');
 xhr.send();
 return this.resultString;
}
  
  
  getAudioUrl3a(pageUrl)
  {
    let frame : any = window.document.getElementById('audio_page_iframe');
    frame.src = pageUrl;
    var doc = frame.contentDocument;
    return this.resultString;
  }
  
 getAudioUrl2a(pageUrl)
  {
     let res : string;

     var basicOptions: RequestOptionsArgs = {
        url: "http://localhost:9000",
        method: RequestMethod.Get,
        search: null,
        body: null,
        responseType : ResponseContentType.Text,
      };


     this.http.get(pageUrl, basicOptions).map( res => res.text())
     .subscribe(
        text  => res = text,
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );

      return res;
  }  

  getAudioUrl2(pageUrl)
  {
     let res : string;
     this.http.get(pageUrl).map( res => res.text())
     .subscribe(
        text  => res = text,
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );

      return res;
  }  
  

 getAudioUrl_p(pageUrl)
{
 // var cors_api_url = "http://localhost:8080"
  var cors_api_url = "https://cors-anywhere.herokuapp.com/"

 var x = new XMLHttpRequest();
    x.open("GET", cors_api_url + pageUrl);
    x.onload = x.onerror = function() {
      console.log(
        pageUrl + '\n' +
        x.status + ' ' + x.statusText + '\n\n' +
        (x.responseText || '')
      );
    };
    x.send(null);

     return null;
}


  getAudioUrl0(pageUrl)
  {
     var request = new XMLHttpRequest();
     request.open("GET", pageUrl, true);
     request.send(null);

     var doc = document.implementation.createHTMLDocument("bibleDotComDoc");
     doc.documentElement.innerHTML = request.responseText;

     let audioEle : any;
     audioEle = doc.getElementById("reader_audio_player");

     if (audioEle != null)
     {
         return audioEle.source;
     }

     return null;
  }
  */

