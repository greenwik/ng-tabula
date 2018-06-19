import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {


   chartIcons = [
      { parentName:"Line Chart",childName:[
                                {name:"Simple Line chart",link:"simpleLine",imgSrc:""},
                                {name:"Dynamic Chart",link:"dynamicLine",imgSrc:""},
                                {name:"Inverted Axis Chart",link:"invertedLine",imgSrc:""},
                                {name:"IRregular Time Chart",link:"irRegulatTimeLine",imgSrc:""},
                                {name:"Time Series Chart",link:"timeSeriesLine",imgSrc:""}
                              ]
                            },
      { parentName:"Area Chart",childName:[
                                 {name:"Simple Area",link:"simpleArea",imgSrc:""},
                                 {name:"Negative Area",link:"negativeArea",imgSrc:""},
                                 {name:"Inverted Area",link:"invertedArea",imgSrc:""},
                                 {name:"Spline Area",link:"splineArea",imgSrc:""},
                                 {name:"Range Line Area",link:"rangeLineArea",imgSrc:""}
                               ]
                             },
      { parentName:"Pie Chart",childName:[
                                  {name:"Pie Legend Chart",link:"pieLegendChart",imgSrc:""},
                                  {name:"Semi Pie Chart",link:"semiPieChart",imgSrc:""},
                                  {name:"Pie Downdrill Chart",link:"pieDrillChart",imgSrc:""},
                                  {name:"Pie Gradient Chart",link:"pieGradientChart",imgSrc:""}
                                ]
                              },
      { parentName:"Column & Bar Charts",childName:[
                                   {name:"Simple Bar",link:"simpleBar",imgSrc:""},
                                   {name:"Negative Stack Bar",link:"negativeBar",imgSrc:""},
                                   {name:"Simple Column",link:"simpleColumn",imgSrc:""},
                                   {name:"Rotated Label Column",link:"RotatedColumn",imgSrc:""},
                                   {name:"Drill Down Column",link:"drillDownColumn",imgSrc:""},
                                   {name:"Range Column",link:"rangeColumn",imgSrc:""}
                                 ]
                               },
       { parentName:"Gauges",childName:[
                                  {name:"Solid Gauge",link:"solidGauge",imgSrc:""},
                                  {name:"Solid Arc Gauge",link:"solidArcGauge",imgSrc:""},
                                  {name:"Activity Gauge",link:"activityGauge",imgSrc:""}
                                ]
                              }
 ];
  constructor() { }

  ngOnInit() {
  }

}
