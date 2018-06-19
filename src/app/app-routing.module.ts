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
import { PieChartDrilldownComponent } from './pie-chart-drilldown/pie-chart-drilldown.component';
import { SemiPieChartComponent } from './semi-pie-chart/semi-pie-chart.component';
import { PieChartGradientfillComponent } from './pie-chart-gradientfill/pie-chart-gradientfill.component';
import { PieChartLegendComponent } from './pie-chart-legend/pie-chart-legend.component';
import { DrillDownColumnComponent } from './drill-down-column/drill-down-column.component';
import { NegativeBarComponent } from './negative-bar/negative-bar.component';
import { RangeColumnComponent } from './range-column/range-column.component';
import { RotatedColumnComponent } from './rotated-column/rotated-column.component';
import { SimpleBarComponent } from './simple-bar/simple-bar.component';
import { SimpleColumnComponent } from './simple-column/simple-column.component';
import { SimpleAreaComponent } from './simple-area/simple-area.component';
import { NegativeAreaComponent } from './negative-area/negative-area.component';
import { InvertedAreaComponent } from './inverted-area/inverted-area.component';
import { SplineAreaComponent } from './spline-area/spline-area.component';
import { RangeLineAreaComponent } from './range-line-area/range-line-area.component';

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
  { path: 'timeSeriesLine', component: TimeSeriesChartComponent },
  { path: 'pieDrillChart', component: PieChartDrilldownComponent },
  { path: 'pieLegendChart', component: PieChartLegendComponent },
  { path: 'pieGradientChart', component: PieChartGradientfillComponent },
  { path: 'semiPieChart', component: SemiPieChartComponent },
  { path: 'simpleBar', component: SimpleBarComponent },
  { path: 'negativeBar', component: NegativeBarComponent },
  { path: 'simpleColumn', component: SimpleColumnComponent },
  { path: 'RotatedColumn', component: RotatedColumnComponent },
  { path: 'drillDownColumn', component: DrillDownColumnComponent },
  { path: 'rangeColumn', component: RangeColumnComponent },
  { path: 'simpleArea', component: SimpleAreaComponent },
  { path: 'negativeArea', component: NegativeAreaComponent },
  { path: 'invertedArea', component: InvertedAreaComponent },
  { path: 'splineArea', component: SplineAreaComponent },
  { path: 'rangeLineArea', component: RangeLineAreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
