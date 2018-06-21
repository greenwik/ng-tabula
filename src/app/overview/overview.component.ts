import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {


   chartIcons = [
      { parentName:"Line Chart",childName:[
                                {name:"Simple Line chart",link:"simpleLine",imgSrc:"simpleLine.png"},
                                {name:"Dynamic Chart",link:"dynamicLine",imgSrc:"dynamic-update.png"},
                                {name:"Inverted Axis Chart",link:"invertedLine",imgSrc:"spline.png"},
                                {name:"IRregular Time Chart",link:"irRegulatTimeLine",imgSrc:"nonIntervel.png"},
                                {name:"Time Series Chart",link:"timeSeriesLine",imgSrc:"timeSeries.png"}
                              ]
                            },
      { parentName:"Area Chart",childName:[
                                 {name:"Simple Area",link:"simpleArea",imgSrc:"simpleArea.png"},
                                 {name:"Negative Area",link:"negativeArea",imgSrc:"negativeArea.png"},
                                 {name:"Inverted Area",link:"invertedArea",imgSrc:"invertedArea.png"},
                                 {name:"Spline Area",link:"splineArea",imgSrc:"splineArea.png"},
                                 {name:"Range Line Area",link:"rangeLineArea",imgSrc:"splineAreaLine.png"}
                               ]
                             },
      { parentName:"Pie Chart",childName:[
                                  {name:"Pie Legend Chart",link:"pieLegendChart",imgSrc:"pieLegend.png"},
                                  {name:"Semi Pie Chart",link:"semiPieChart",imgSrc:"semiPie.png"},
                                  {name:"Pie Downdrill Chart",link:"pieDrillChart",imgSrc:"pie-drilldown.png"},
                                  {name:"Pie Gradient Chart",link:"pieGradientChart",imgSrc:"pieGradient.png"}
                                ]
                              },
      { parentName:"Column & Bar Charts",childName:[
                                   {name:"Simple Bar",link:"simpleBar",imgSrc:"simpleBar.png"},
                                   {name:"Negative Stack Bar",link:"negativeBar",imgSrc:"negativeBar.png"},
                                   {name:"Simple Column",link:"simpleColumn",imgSrc:"simpleColumn.png"},
                                   {name:"Rotated Label Column",link:"RotatedColumn",imgSrc:"rotatedColumn.png"},
                                   {name:"Drill Down Column",link:"drillDownColumn",imgSrc:"column-drilldown.png"},
                                   {name:"Range Column",link:"rangeColumn",imgSrc:"rangeColumn.png"}
                                 ]
                               },
       { parentName:"Gauges",childName:[
                                  {name:"Solid Gauge",link:"solidGauge",imgSrc:"gauge-solid.png"},
                                  // {name:"Solid Arc Gauge",link:"solidArcGauge",imgSrc:""},
                                  {name:"Activity Gauge",link:"activityGauge",imgSrc:"gauge-activity.png"}
                                ]
                              }
 ];
  constructor() { }

  ngOnInit() {
  }

}
