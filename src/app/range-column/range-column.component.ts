import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-range-column',
  templateUrl: './range-column.component.html',
  styleUrls: ['./range-column.component.css']
})
export class RangeColumnComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'rightArrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/rightArrow.svg'));
    }

    @Input() value:string;
    public chartInst: any;
    // {"series":[{"setData":function(data:any){ return null;}}],
    //               "reflow":function(){return null;}};

    column = {
      chart: {
          type: 'columnrange',
          inverted: true
      },

      title: {
          text: 'Temperature variation by month'
      },

      subtitle: {
          text: 'Observed in Vik i Sogn, Norway, 2017'
      },

      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      yAxis: {
          title: {
              text: 'Temperature ( °C )'
          }
      },

      tooltip: {
          valueSuffix: '°C'
      },

      plotOptions: {
          columnrange: {
              dataLabels: {
                  enabled: true,
                  format: '{y}°C'
              }
          }
      },

      legend: {
          enabled: false
      },

      series: [{
          name: 'Temperatures',
          data: [
              [-9.9, 10.3],
              [-8.6, 8.5],
              [-10.2, 11.8],
              [-1.7, 12.2],
              [-0.6, 23.1],
              [3.7, 25.4],
              [6.0, 26.2],
              [6.7, 21.4],
              [3.5, 19.5],
              [-1.3, 16.0],
              [-8.7, 9.4],
              [-9.0, 8.6]
          ]
      }]
  };


  saveInstance(chartInstance): void {
    this.chartInst = chartInstance;
  }
  updateSeriesData(data:any): void {
    //console.log(this.chart);
    this.chartInst.series[0].setData(data);
  }

  ngOnInit() {
    this.column = this.column;
  }

}
