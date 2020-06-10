import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Nutricio, ChartData } from 'src/interfaces/interfaces';
import { ChartService } from 'src/app/services/chart.service';


@Component({
  selector: 'app-nutricio-registre',
  templateUrl: './nutricio-registre.page.html',
  styleUrls: ['./nutricio-registre.page.scss'],
})
export class NutricioRegistrePage implements OnInit {

  @ViewChild('chart',{static:false}) chart;

  chartData: number[] = [];
  labels: string [] = [];
  chartTitle: string = "Esmorzar";
  chartSelected: string = "esmorzar";

  dades: Nutricio[];
  

  endpoint: string;

  constructor(private dataService : DataService, private chartService : ChartService) {   }

  ngOnInit() { 
    this.endpoint = `/api/v1/nutricio/${this.dataService.getUsuariId()}`;
    this.loadData();
  }

  async loadData(){
    (await this.dataService.request<Nutricio[]>(this.endpoint)).subscribe(
      data => {
        this.dades = data;
        this.dades.forEach(dada => {
          this.labels.push('');
        });
        this.loadChartData();
        this.dataService.loadingControllerDismiss();
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error carregant");
      }
    );
  }

  loadChartData(){
    this.dades.forEach(dada => {
      this.chartData.push(dada.esmorzar);
    });
    
    this.chartService.createBarChart(this.chart, this.chartTitle, this.labels, this.chartData);

  }

  canviarDadesGrafica(event){
    this.chartData = [];  

    switch(event.detail.value){
      case 'esmorzar':
        this.dades.forEach(dada => {
          this.chartData.push(dada.esmorzar);
        });
        this.chartTitle = 'Esmorzar';
        break;
      case 'dinar':
        this.dades.forEach(dada => {
          this.chartData.push(dada.dinar);
        });
        this.chartTitle = 'Dinar';
        break;
      case 'berenar':
        this.dades.forEach(dada => {
          this.chartData.push(dada.berenar);
        });
        this.chartTitle = 'Berenar';
        break;
      case 'sopar':
        this.dades.forEach(dada => {
          this.chartData.push(dada.sopar);
        });
        this.chartTitle = 'Sopar';
        break;
      case 'gotsAigua':
        this.dades.forEach(dada => {
          this.chartData.push(dada.gotsAigua);
        });
        this.chartTitle = `Gots d'aigua`;
        break;
    };

    this.chartService.createBarChart(this.chart, this.chartTitle, this.labels, this.chartData);
  }

}
