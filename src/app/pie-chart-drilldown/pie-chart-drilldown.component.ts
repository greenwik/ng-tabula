import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { ChartDataService } from '../chart-data.service';

@Component({
  selector: 'app-pie-chart-drilldown',
  templateUrl: './pie-chart-drilldown.component.html',
  styleUrls: ['./pie-chart-drilldown.component.css']
})
export class PieChartDrilldownComponent implements OnInit {

  public chartInst: any;
  public isBack = false;
  public name:string;
  // {"series":[{"setData":function(data:any){ return null;}}],
  //               "reflow":function(){return null;}};

  public dataArrDrilldown ={
      "drillDat":{
          "name": "Browsers",
          "colorByPoint": true,
          "data": [
              {
                  "name": "Chrome",
                  "y": 62.74,
                  "downdrill":true
              },
              {
                  "name": "Firefox",
                  "y": 10.57,
                  "downdrill":true
              },
              {
                  "name": "IE",
                  "y": 7.23,
                  "downdrill":true
              },
              {
                  "name": "Safari",
                  "y": 5.58,
                  "downdrill":true
              },
              {
                  "name": "Edge",
                  "y": 4.02,
                  "downdrill":true
              },
              {
                  "name": "Opera",
                  "y": 1.92,
                  "downdrill":true
              },
              {
                  "name": "Other",
                  "y": 7.62,
                  "downdrill":false
              }
          ]
      },
      "drillDownData":{
              "Chrome":{
                  "name": "Chrome",
                  "data": [
                      [
                          "v65.0",
                          0.1
                      ],
                      [
                          "v64.0",
                          1.3
                      ],
                      [
                          "v63.0",
                          53.02
                      ],
                      [
                          "v62.0",
                          1.4
                      ],
                      [
                          "v61.0",
                          0.88
                      ],
                      [
                          "v60.0",
                          0.56
                      ],
                      [
                          "v59.0",
                          0.45
                      ],
                      [
                          "v58.0",
                          0.49
                      ],
                      [
                          "v57.0",
                          0.32
                      ],
                      [
                          "v56.0",
                          0.29
                      ],
                      [
                          "v55.0",
                          0.79
                      ]

                    ]
              },
              "Firefox":{
                  "name": "Firefox",
                  "data": [
                      [
                          "v58.0",
                          1.02
                      ],
                      [
                          "v57.0",
                          7.36
                      ],
                      [
                          "v56.0",
                          0.35
                      ],
                      [
                          "v55.0",
                          0.11
                      ],
                      [
                          "v54.0",
                          0.1
                      ],
                      [
                          "v52.0",
                          0.95
                      ]
                  ]
              },
              "IE":{
                  "name": "Internet Explorer",
                  "data": [
                      [
                          "v11.0",
                          6.2
                      ],
                      [
                          "v10.0",
                          0.29
                      ],
                      [
                          "v9.0",
                          0.27
                      ],
                      [
                          "v8.0",
                          0.47
                      ]
                  ]
              },
              "Safari":{
                  "name": "Safari",
                  "data": [
                      [
                          "v11.0",
                          3.39
                      ],
                      [
                          "v10.1",
                          0.96
                      ],
                      [
                          "v10.0",
                          0.36
                      ],
                      [
                          "v9.1",
                          0.54
                      ],
                      [
                          "v9.0",
                          0.13
                      ],
                      [
                          "v5.1",
                          0.2
                      ]
                  ]
              },
              "Edge":{
                  "name": "Edge",
                  "data": [
                      [
                          "v16",
                          2.6
                      ],
                      [
                          "v15",
                          0.92
                      ],
                      [
                          "v14",
                          0.4
                      ],
                      [
                          "v13",
                          0.1
                      ]
                  ]
              },
              "Opera":{
                  "name": "Opera",
                  "data": [
                      [
                          "v50.0",
                          0.96
                      ],
                      [
                          "v49.0",
                          0.82
                      ],
                      [
                          "v12.1",
                          0.14
                      ]
                  ]
              }
      }
};


  pie = {
    chart: {
        type: 'pie',
        animation: true
    },
    title: {
        text: 'Browser market shares. January, 2018'
    },
    subtitle: {
        text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        "name": "Browsers",
        "colorByPoint": true,
        "data": [
            {
                "name": "Chrome",
                "y": 62.74,
                "downdrill":true
            },
            {
                "name": "Firefox",
                "y": 10.57,
                "downdrill":true
            },
            {
                "name": "IE",
                "y": 7.23,
                "downdrill":true
            },
            {
                "name": "Safari",
                "y": 5.58,
                "downdrill":true
            },
            {
                "name": "Edge",
                "y": 4.02,
                "downdrill":true
            },
            {
                "name": "Opera",
                "y": 1.92,
                "downdrill":true
            },
            {
                "name": "Other",
                "y": 7.62,
                "downdrill":false
            }
        ]
    }]

  };


  drillDownFunc(e){
    console.log("clicked",e);
    if(e.point.options && e.point.options.downdrill){
        this.name = e.point.options.name;
        this.isBack = true;
        //this.chartInst.update({series:[this.dataArrDrilldown.drillDownData[this.name]]});
        this.chartInst.series[0].update({name:this.name,colorByPoint:true},false);
        this.chartInst.redraw();
        this.chartInst.series[0].setData(this.dataArrDrilldown.drillDownData[this.name].data,false);
        this.chartInst.redraw();

    }
  }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'leftArrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/left_arrow.svg'));
    }

    updateDownDrill(){
        this.isBack = false;
        this.updateSelect(this.name);
        console.log("data",this.dataArrDrilldown);
        this.chartInst.series[0].update({name:this.dataArrDrilldown.drillDat.name,colorByPoint:true},false);
        //this.chartInst.update({series:[this.dataArrDrilldown.drillDat]});
        this.chartInst.redraw();
        this.chartInst.series[0].setData(this.dataArrDrilldown.drillDat.data,false);
        this.chartInst.redraw();
    }

    updateSelect(name:string){
      //var data = this.dataArrDrilldown.drillData.data;
      let length = this.dataArrDrilldown.drillDat.data.length;
      for( var i=0; i < length; i++){
        let nameDrill = this.dataArrDrilldown.drillDat.data[i].name;
        if(nameDrill == name){
          this.dataArrDrilldown.drillDat.data[i]["sliced"] = true;
          this.dataArrDrilldown.drillDat.data[i]["selected"] = true;
        }
        else{
          this.dataArrDrilldown.drillDat.data[i]["sliced"] = false;
          this.dataArrDrilldown.drillDat.data[i]["selected"] = false;
        }
      }
    }

    saveInstance(chartInstance): void {
      this.chartInst = chartInstance;
      //window['highChart'].getOptions().colors[0];
      //console.log(window['highCharts'].getOptions().colors[0]);
      //console.log(this.chartInst);
    }
    updateSeriesData(data:any): void {
      //console.log(this.chart);
      //this.chartInst.series[0].setData(data);
    }

    ngOnInit() {
      this.pie = this.pie;
    }

}
