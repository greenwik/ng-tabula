import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-solid-arc-gauge',
  templateUrl: './solid-arc-gauge.component.html',
  styleUrls: ['./solid-arc-gauge.component.css']
})

export class SolidArcGaugeComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'rightArrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/rightArrow.svg'));
    }

    @Input() value:string;
    public chartInst: any;
    // {"series":[{"setData":function(data:any){ return null;}}],
    //               "reflow":function(){return null;}};

    gauge = {
      chart: {
        type: 'solidgauge'
      },
      title: {
        text:"Solid Arc Gauge",
        y:10
      },
      pane: {
        //center: ['50%'],
        size: '100%',
        startAngle: -120,
        endAngle: 120,
        background: {
          backgroundColor:'#EEE',
          innerRadius: '100%',
          outerRadius: '100%',
          shape: 'arc',
          //lineWidth:10
        }
      },
      tooltip: {
        enabled: false
      },
      // credits: {
      //   enabled: false
      // },

      // the value axis
      yAxis: {
      min: 0,
      max: 180,
      stops: [
        [0.1, '#55BF3B'], // green
        [0.5, '#DDDF0D'], // yellow
        [0.8, '#DF5353'] // red
      ],
      lineWidth: 0,
      //minorTickInterval: 0,
      tickAmount: 0,
      tickColor:"#fff",
      labels: {
        y: 16
      }
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 0,
          borderWidth: 0,
          useHTML: true
        },
        //linecap: 'round',
        //stickyTracking: false,
        //rounded: true
      }
    },
    series: [{
      name: '',
      data: [140],
      dataLabels: {
        format: '<div style="text-align:center"><span style="font-size:25px;color:black">{y}</span><br/>' +
        '<span style="font-size:12px;color:silver">km/h</span></div>'
      },
      tooltip: {
        valueSuffix: ' km/h'
      }
    }]
  };

  changeValue(){
    this.gauge.series[0].data = [parseInt(this.value)];
    //this.gauge.series[0].tooltip.valueSuffix = this.valueSuffix;
    this.updateSeriesData(this.gauge.series[0].data);

  }
  saveInstance(chartInstance): void {
    this.chartInst = chartInstance;
  }
  updateSeriesData(data:any): void {
    //console.log(this.chart);
    this.chartInst.series[0].setData(data);
  }

  ngOnInit() {
    this.gauge = this.gauge;
  }

}
