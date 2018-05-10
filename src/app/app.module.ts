import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
//import material animation
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';



// imports to use highcharts
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { SolidGaugeComponent } from './solidGauge/solidGauge.component';
import { AppRoutingModule } from './/app-routing.module';
import { OverviewComponent } from './overview/overview.component';

export function highchartsfactory() {
  const hc = require('highcharts');
  const hcm = require('highcharts/highcharts-more');
  const sg = require('highcharts/modules/solid-gauge');
  hcm(hc);
  sg(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    SolidGaugeComponent,
    OverviewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ChartModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
     provide: HighchartsStatic,
     useFactory: highchartsfactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
