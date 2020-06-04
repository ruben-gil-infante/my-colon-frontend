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
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
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
  }
}
