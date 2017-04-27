import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {NgbModule, NgbButtonsModule, NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap'

import { ScheduleService } from './schedule.service';
import { AudioService } from './audio.service';
import { WindowService } from './window.service';
import { UtilitiesService } from './utilities.service';
import { ConfigurationService } from './configuration.service';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';

import { AboutComponent } from './about/about.component';
import { AboutZHComponent } from './about-zh/about-zh.component';
import { SafePipe } from './safe.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DatePickerPopUpComponent } from './date-picker-pop-up/date-picker-pop-up.component';
import { DailyReadingComponent } from './daily-reading/daily-reading.component';
import { TextPageComponent } from './text-page/text-page.component';

const routes: Routes = [
//  { path: 'dailyList/:schedule', component: DailyListComponent },
//  { path: 'daily', component: DailyReadingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'aboutZH', component: AboutZHComponent },
  { path: 'text', component: TextPageComponent },
  { path: 'configuration', component: ConfigurationComponent },
//  { path: '', redirectTo: '/daily', pathMatch: 'full'},
  { path: '', component: DailyReadingComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    AboutComponent,
    AboutZHComponent,
    SafePipe,
    PageNotFoundComponent,
    ConfigurationComponent,
    DatePickerPopUpComponent,
    DailyReadingComponent,
    TextPageComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    NgbButtonsModule,
    NgbDatepickerModule,
  ],
  exports: [ RouterModule ],
  providers: [ScheduleService, AudioService, WindowService, UtilitiesService, ConfigurationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
