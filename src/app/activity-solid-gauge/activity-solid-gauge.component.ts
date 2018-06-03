import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-activity-solid-gauge',
  templateUrl: './activity-solid-gauge.component.html',
  styleUrls: ['./activity-solid-gauge.component.css']
})
export class ActivitySolidGaugeComponent implements OnInit {

  @Input() value = {
    "outer":"80",
    "middle":"65",
    "inner":"50"
  };


  public chartInst: any;
  // {"series":[{"setData":function(data:any){ return null;}}],
  //               "reflow":function(){return null;}};
  public renderIcons = function() {

  // Move icon
  if (!this.series[0].icon) {
      this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
      .attr({
        'stroke': '#303030',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        'zIndex': 10
      })
      .add(this.series[2].group);
    }
  this.series[0].icon.translate(
    this.chartWidth / 2 - 10,
    this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
    (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
  );

// Exercise icon
  if (!this.series[1].icon) {
    this.series[1].icon = this.renderer.path(
      ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
      'M', 8, -8, 'L', 16, 0, 8, 8]
    )
    .attr({
      'stroke': '#ffffff',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': 2,
      'zIndex': 10
    })
    .add(this.series[2].group);
  }
  this.series[1].icon.translate(
    this.chartWidth / 2 - 10,
    this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
    (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
  );

  // Stand icon
  if (!this.series[2].icon) {
      this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
      .attr({
        'stroke': '#303030',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        'zIndex': 10
      })
      .add(this.series[2].group);
    }

  this.series[2].icon.translate(
    this.chartWidth / 2 - 10,
    this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
    (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
  );
}

gauge = {
      chart: {
          type: 'solidgauge',
          // height: '110%',
          events: {
            render: this.renderIcons
          }
        },

      title: {
        text: 'Activity',
        style: {
          fontSize: '24px'
        }
      },

      tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
          fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
          return {
            x: (this.chart.chartWidth - labelWidth) / 2,
            y: (this.chart.plotHeight / 2) + 15
          };
        }
      },

      pane: {
        startAngle: 0,
        endAngle: 360,
        background: [
          { // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: "#E4F0FB",
            borderWidth: 0
          }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: "#ECECEC",
            borderWidth: 0
          }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: "#daf9d3",
            borderWidth: 0
          }
        ]
      },

      yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
      },

      plotOptions: {
        solidgauge: {
          dataLabels: {
            enabled: false
          },
          linecap: 'round',
          stickyTracking: false,
          rounded: true
        }
      },

      series: [{
        name: 'Move',
        data: [{
          color: "#7cb5ec",
          radius: '112%',
          innerRadius: '88%',
          y: 80
        }]
      }, {
        name: 'Exercise',
        data: [{
          color: "#434348",
          radius: '87%',
          innerRadius: '63%',
          y: 65
        }]
      }, {
        name: 'Stand',
        data: [{
          color: "#90ed7d",
          radius: '62%',
          innerRadius: '38%',
          y: 50
        }]
      }]
};

constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  iconRegistry.addSvgIcon(
    'rightArrow',
    sanitizer.bypassSecurityTrustResourceUrl('assets/rightArrow.svg'));
  }

  changeValue(){
    this.gauge.series[0].data[0].y = parseInt(this.value.outer);
    this.gauge.series[1].data[0].y = parseInt(this.value.middle);
    this.gauge.series[2].data[0].y = parseInt(this.value.inner);
    //this.gauge.series[0].tooltip.valueSuffix = this.valueSuffix;
    this.updateSeriesData();

  }
  saveInstance(chartInstance): void {
    this.chartInst = chartInstance;
  }
  updateSeriesData(): void {
    //console.log(this.chartInst.series[0].points[0]);
    //this.chartInst.series[0].points[0].update(40)

    this.chartInst.series[0].points[0].update(this.gauge.series[0].data[0].y);
    this.chartInst.series[1].points[0].update(this.gauge.series[1].data[0].y);
    this.chartInst.series[2].points[0].update(this.gauge.series[2].data[0].y);

  }

  ngOnInit() {
    this.gauge = this.gauge;
  }

}
