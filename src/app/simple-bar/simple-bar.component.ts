import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-simple-bar',
  templateUrl: './simple-bar.component.html',
  styleUrls: ['./simple-bar.component.css']
})
export class SimpleBarComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'rightArrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/rightArrow.svg'));
    }

    @Input() value:string;
    public chartInst: any;
    // {"series":[{"setData":function(data:any){ return null;}}],
    //               "reflow":function(){return null;}};

    bar = {
        chart: {
          type: 'bar'
      },
      title: {
          text: 'Historic World Population by Region'
      },
      subtitle: {
          text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
      },
      xAxis: {
          categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Population (millions)',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' millions'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor: ((window['highCharts'].theme && window['highCharts'].theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: true
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2]
      }, {
          name: 'Year 1900',
          data: [133, 156, 947, 408, 6]
      }, {
          name: 'Year 2000',
          data: [814, 841, 3714, 727, 31]
      }, {
          name: 'Year 2016',
          data: [1216, 1001, 4436, 738, 40]
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
