import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http';
import { ChartDataService } from './chart-data.service';

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
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



// imports to use highcharts
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { SolidGaugeComponent } from './solidGauge/solidGauge.component';
import { AppRoutingModule } from './app-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SolidArcGaugeComponent } from './solid-arc-gauge/solid-arc-gauge.component';
import { ActivitySolidGaugeComponent } from './activity-solid-gauge/activity-solid-gauge.component';
import { BasicLineChartComponent } from './basic-line-chart/basic-line-chart.component';
import { TimeSeriesChartComponent } from './time-series-chart/time-series-chart.component';
import { IrRegularTimeChartComponent } from './ir-regular-time-chart/ir-regular-time-chart.component';
import { InvertedAxisChartComponent } from './inverted-axis-chart/inverted-axis-chart.component';
import { DynamicLineGraphComponent } from './dynamic-line-graph/dynamic-line-graph.component';
import { PieChartLegendComponent } from './pie-chart-legend/pie-chart-legend.component';
import { SemiPieChartComponent } from './semi-pie-chart/semi-pie-chart.component';
import { PieChartDrilldownComponent } from './pie-chart-drilldown/pie-chart-drilldown.component';
import { PieChartGradientfillComponent } from './pie-chart-gradientfill/pie-chart-gradientfill.component';
import { SimpleBarComponent } from './simple-bar/simple-bar.component';
import { NegativeBarComponent } from './negative-bar/negative-bar.component';
import { SimpleColumnComponent } from './simple-column/simple-column.component';
import { RotatedColumnComponent } from './rotated-column/rotated-column.component';
import { DrillDownColumnComponent } from './drill-down-column/drill-down-column.component';
import { RangeColumnComponent } from './range-column/range-column.component';
import { SimpleAreaComponent } from './simple-area/simple-area.component';
import { NegativeAreaComponent } from './negative-area/negative-area.component';
import { InvertedAreaComponent } from './inverted-area/inverted-area.component';
import { SplineAreaComponent } from './spline-area/spline-area.component';
import { RangeLineAreaComponent } from './range-line-area/range-line-area.component';

export function highchartsfactory() {
  const hc = require('highcharts');
  window['highCharts'] = hc;
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
    OverviewComponent,
    SolidArcGaugeComponent,
    ActivitySolidGaugeComponent,
    BasicLineChartComponent,
    TimeSeriesChartComponent,
    IrRegularTimeChartComponent,
    InvertedAxisChartComponent,
    DynamicLineGraphComponent,
    PieChartLegendComponent,
    SemiPieChartComponent,
    PieChartDrilldownComponent,
    PieChartGradientfillComponent,
    SimpleBarComponent,
    NegativeBarComponent,
    SimpleColumnComponent,
    RotatedColumnComponent,
    DrillDownColumnComponent,
    RangeColumnComponent,
    SimpleAreaComponent,
    NegativeAreaComponent,
    InvertedAreaComponent,
    SplineAreaComponent,
    RangeLineAreaComponent
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
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    {
     provide: HighchartsStatic,
     useFactory: highchartsfactory
   },
   ChartDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
