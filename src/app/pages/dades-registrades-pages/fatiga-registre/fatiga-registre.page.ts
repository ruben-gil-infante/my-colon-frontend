import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ChartService } from 'src/app/services/chart.service';
import { Fatiga } from 'src/interfaces/interfaces';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-fatiga-registre',
  templateUrl: './fatiga-registre.page.html',
  styleUrls: ['./fatiga-registre.page.scss'],
})
export class FatigaRegistrePage implements OnInit {

  @ViewChild('chart', {static: false}) chart;

  endpoint: string;
  dades: Fatiga[] = [];
  chartData: number [] = [];
  labels: string [] = [];

  constructor(private dataService : DataService, private chartService : ChartService) { 
    
  }

  ngOnInit() {
    this.endpoint = `/api/v1/fatiga/${this.dataService.getUsuariId()}`;
    this.loadData();
  }

  async loadData(){
    (await this.dataService.request<Fatiga[]>(this.endpoint)).subscribe(
      data => {
        this.dades = data;
        this.dades.forEach(dada => {
          this.labels.push(' ');
          this.chartData.push(dada.puntuacio);
        });
        
        this.chartService.createBarChart(this.chart, 'Fatiga', this.labels, this.chartData);
        this.dataService.loadingControllerDismiss();
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error carregant");
      }
    );
  }

}
