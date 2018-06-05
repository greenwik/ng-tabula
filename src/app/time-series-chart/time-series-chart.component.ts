import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { ChartDataService } from '../chart-data.service';

@Component({
  selector: 'app-time-series-chart',
  templateUrl: './time-series-chart.component.html',
  styleUrls: ['./time-series-chart.component.css']
})
export class TimeSeriesChartComponent implements OnInit {

  @Input() value:string;
  public chartInst: any;
  // {"series":[{"setData":function(data:any){ return null;}}],
  //               "reflow":function(){return null;}};
  public url:string = "https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json";
  public data:Array<any>;

  //console.log("color",window['highCharts'].Color(window['highCharts'].getOptions().colors[0]).setOpacity(0).get('rgba'));

  line = {
           chart: {
               zoomType: 'x'
           },
           title: {
               text: 'USD to EUR exchange rate over time'
           },
           subtitle: {
               text:'Pinch the chart to zoom in'
           },
           xAxis: {
               type: 'datetime'
           },
           yAxis: {
               title: {
                   text: 'Exchange rate'
               }
           },
           legend: {
               enabled: false
           },
           plotOptions: {
               area: {
                   fillColor: {
                       linearGradient: {
                           x1: 0,
                           y1: 0,
                           x2: 0,
                           y2: 1
                       },
                       stops: [
                           [0, '#2f7ed8'],
                           [1, '#2f7ed8']
                       ]
                   },
                   marker: {
                       radius: 2
                   },
                   lineWidth: 1,
                   states: {
                       hover: {
                           lineWidth: 1
                       }
                   },
                   threshold: null
               }
           },

           series: [{
               type: 'area',
               name: 'USD to EUR',
               data: []
           }]
  };

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private chartDataService: ChartDataService) {
    iconRegistry.addSvgIcon(
      'rightArrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/rightArrow.svg'));
    }

    changeValue(){
      //this.gauge.series[0].data = [parseInt(this.value)];
      //this.gauge.series[0].tooltip.valueSuffix = this.valueSuffix;
      //this.updateSeriesData(this.gauge.series[0].data);

    }
    saveInstance(chartInstance): void {
      this.chartInst = chartInstance;
      this.getData();
    }
    updateSeriesData(data:any): void {
      //console.log(this.chart);
      //this.chartInst.series[0].setData(data);
    }

    ngOnInit() {
     this.line = this.line;
     //console.log("color",window['highCharts'].getOptions().colors[0]);
      //this.getData();
    }

    getData():void {
      this.chartDataService.getChartData(this.url)
      .subscribe(Data => {
        // console.log("data",Data);

        if(this.chartInst){
          this.chartInst.update({
            plotOptions: {area: {
              fillColor: {
                stops: [
                    [0, window['highCharts'].getOptions().colors[0]],
                    [1, window['highCharts'].Color(window['highCharts'].getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
              }
            }},
            series:[{
              data: Data
          }]});
        }

      });

    }

}
