import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-negative-bar',
  templateUrl: './negative-bar.component.html',
  styleUrls: ['./negative-bar.component.css']
})
export class NegativeBarComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'rightArrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/rightArrow.svg'));
    }

    @Input() value:string;
    public chartInst: any;
    // {"series":[{"setData":function(data:any){ return null;}}],
    //               "reflow":function(){return null;}};
    categories = [
      '0-4', '5-9', '10-14', '15-19',
      '20-24', '25-29', '30-34', '35-39', '40-44',
      '45-49', '50-54', '55-59', '60-64', '65-69',
      '70-74', '75-79', '80-84', '85-89', '90-94',
      '95-99', '100 + '
    ];

    bar = {
      chart: {
          type: 'bar'
        },
      title: {
          text: 'Population pyramid for Germany, 2018'
        },
      subtitle: {
          text: 'Source: <a href="http://populationpyramid.net/germany/2018/">Population Pyramids of the World from 1950 to 2100</a>'
      },
      xAxis: [{
          categories: this.categories,
          reversed: false,
          labels: {
              step: 1
          }
      }, { // mirror axis on right side
          opposite: true,
          reversed: false,
          categories: this.categories,
          linkedTo: 0,
          labels: {
              step: 1
          }
      }],
      yAxis: {
          title: {
              text: null
          },
          labels: {
              formatter: function () {
                  return Math.abs(this.value) + '%';
              }
          }
      },

      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },

      tooltip: {
          formatter: function () {
              return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                  'Population: ' + window['highCharts'].numberFormat(Math.abs(this.point.y), 0);
          }
      },

      series: [{
          name: 'Male',
          data: [
              -2.2, -2.1, -2.2, -2.4,
              -2.7, -3.0, -3.3, -3.2,
              -2.9, -3.5, -4.4, -4.1,
              -3.4, -2.7, -2.3, -2.2,
              -1.6, -0.6, -0.3, -0.0,
              -0.0
          ]
      }, {
          name: 'Female',
          data: [
              2.1, 2.0, 2.1, 2.3, 2.6,
              2.9, 3.2, 3.1, 2.9, 3.4,
              4.3, 4.0, 3.5, 2.9, 2.5,
              2.7, 2.2, 1.1, 0.6, 0.2,
              0.0
          ]
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
    this.bar = this.bar;
  }

}
