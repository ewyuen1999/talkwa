import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';

import { Bible } from '../models/bible';
import { Configuration } from '../models/configuration';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  versions: Bible[];
  selected: Bible;
  configuration : Configuration = new Configuration();
  

  constructor(private configurationService: ConfigurationService) { 
     
  }

  public selectByName(name: string) {
    this.selected = this.versions.find(version => version.id === name);
    this.configurationService.currentBible = this.selected.id;
  }
  
  ngOnInit() {
   this.configuration.isGuessAudio = this.configurationService.guessAudioPosition; 
   this.versions = [
      { id: "KJV", displayName: "King James Version" },
      { id: "NIV", displayName: "New International Version" },
      { id: "ESV", displayName: "English Standard Version" },
      { id: "CNVT", displayName: "Chinese New Ver (Trad)" },
      { id: "CNVS", displayName: "Chinese New Ver (Simp)"},
      { id: "CUV", displayName: "Chinese Union (Trad, RCUV Audio)" },
      { id: "CUVS", displayName: "Chinese Union Ver (Simp)"  },
      { id: "RVR1960", displayName: "Reina-Valera (1960)"  },
      { id: "VIET", displayName: "Vietnamese Bible (1934)"  },
    ]
    this.selectByName(this.configurationService.currentBible);

    /*
    let document : HTMLDocument = this.window.nativeWindow.document;
    let ele: any = document.getElementById("isGuessAudio");
    if (ele != null)
    {
        if (this.configuration.isGuessAudio)
        {
          ele.checked = true;
        }
        else
        {
          ele.checked = false;
        }

    }*/
  }

 changedVersionHandler(item : Bible) {
    this.configurationService.setCurrentBible(item.id);
 }

changedGuessHandler(guess : boolean) {
    this.configurationService.setGuessAudioPosition(guess);
 }
}
