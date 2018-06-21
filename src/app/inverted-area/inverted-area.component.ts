import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-inverted-area',
  templateUrl: './inverted-area.component.html',
  styleUrls: ['./inverted-area.component.css']
})
export class InvertedAreaComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'rightArrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/rightArrow.svg'));
    }

    @Input() value:string;
    public chartInst: any;
    // {"series":[{"setData":function(data:any){ return null;}}],
    //               "reflow":function(){return null;}};

    area = {
      chart: {
          type: 'area',
          inverted: true
      },
      title: {
          text: 'Average fruit consumption during one week'
      },
      subtitle: {
          style: {
              position: 'absolute',
              right: '0px',
              bottom: '10px'
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -150,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor: (window['highCharts'].theme && window['highCharts'].theme.legendBackgroundColor) || '#FFFFFF'
      },
      xAxis: {
          categories: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
          ]
      },
      yAxis: {
          title: {
              text: 'Number of units'
          },
          allowDecimals: false,
          min: 0
      },
      plotOptions: {
          area: {
              fillOpacity: 0.5
          }
      },
      series: [{
          name: 'John',
          data: [3, 4, 3, 5, 4, 10, 12]
      }, {
          name: 'Jane',
          data: [1, 3, 4, 3, 3, 5, 4]
      }]
  };

  changeValue(){


  }
  saveInstance(chartInstance): void {
    this.chartInst = chartInstance;
  }
  updateSeriesData(data:any): void {
    //console.log(this.chart);
    this.chartInst.series[0].setData(data);
  }

  ngOnInit() {
    this.area = this.area;
  }

}
