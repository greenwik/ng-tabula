import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { ChartDataService } from '../chart-data.service';

@Component({
  selector: 'app-pie-chart-legend',
  templateUrl: './pie-chart-legend.component.html',
  styleUrls: ['./pie-chart-legend.component.css']
})
export class PieChartLegendComponent implements OnInit {

  public chartInst: any;
  // {"series":[{"setData":function(data:any){ return null;}}],
  //               "reflow":function(){return null;}};

  pie = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Other',
            y: 7.05
        }]
    }]
  };

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
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
