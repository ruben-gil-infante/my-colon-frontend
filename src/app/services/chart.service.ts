import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  createBarChart(barChart, label, labels, data) {
    let bars = new Chart(barChart.nativeElement, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  };


  createDoubleBarChart(barChart, labels, dataSet){
    let bars = new Chart(barChart.nativeElement, {
      type: 'line',
      data: {
        labels: labels,
        datasets: dataSet
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
