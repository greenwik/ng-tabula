import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './solidGauge.component.html',
  styleUrls: ['./solidGauge.component.css']
})
export class SolidGaugeComponent implements OnInit {
  // @Input() value: string= "0";
  @Input() value:string;
  chartInst = {"series":[{"setData":function(data:any){ return null;}}]};

  gauge = {
            chart: {
              type: 'solidgauge'
            },
            title: {
              text:"Solid Gauge",
              y:100
            },
            pane: {
              center: ['50%', '80%'],
              size: '100%',
              startAngle: -90,
              endAngle: 90,
              background: {
                backgroundColor:'#fafafa',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
              }
            },
            tooltip: {
              enabled: false
            },
            credits: {
              enabled: false
            },

            // the value axis
            yAxis: {
              min: 0,
              max: 180,
              stops: [
                  [0.1, '#55BF3B'], // green
                  [0.5, '#DDDF0D'], // yellow
                  [1.0, '#DF5353'] // red
              ],
              lineWidth: 0,
              minorTickInterval: null,
              tickAmount: 1,

              labels: {
                y: 16
              }
            },
            plotOptions: {
              solidgauge: {
                dataLabels: {
                  y: 5,
                  borderWidth: 0,
                  useHTML: true
                }
              }
            },
            series: [{
              name: 'Speed',
              data: [180],
              dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:black">{y}</span><br/>' +
                   '<span style="font-size:12px;color:silver">km/h</span></div>'
              },
              tooltip: {
                valueSuffix: ' km/h'
              }
            }]
          };

  constructor() {}

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
