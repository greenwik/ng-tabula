import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SolidGaugeComponent } from './solidGauge/solidGauge.component';
import { OverviewComponent } from './overview/overview.component';
import { SolidArcGaugeComponent } from './solid-arc-gauge/solid-arc-gauge.component';
import { ActivitySolidGaugeComponent } from './activity-solid-gauge/activity-solid-gauge.component';
import { BasicLineChartComponent } from './basic-line-chart/basic-line-chart.component';
import { DynamicLineGraphComponent } from './dynamic-line-graph/dynamic-line-graph.component';
import { InvertedAxisChartComponent } from './inverted-axis-chart/inverted-axis-chart.component';
import { IrRegularTimeChartComponent } from './ir-regular-time-chart/ir-regular-time-chart.component';
import { TimeSeriesChartComponent } from './time-series-chart/time-series-chart.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'solidGauge', component: SolidGaugeComponent },
  { path: 'solidArcGauge', component: SolidArcGaugeComponent },
  { path: 'activityGauge', component: ActivitySolidGaugeComponent },
  { path: 'simpleLine', component: BasicLineChartComponent },
  { path: 'dynamicLine', component: DynamicLineGraphComponent },
  { path: 'invertedLine', component: InvertedAxisChartComponent },
  { path: 'irRegulatTimeLine', component: IrRegularTimeChartComponent },
  { path: 'timeSeriesLine', component: TimeSeriesChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
