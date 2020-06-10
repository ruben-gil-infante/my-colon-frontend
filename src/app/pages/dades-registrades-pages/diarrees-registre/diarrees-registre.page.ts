import { Component, OnInit, ViewChild } from '@angular/core';
import { Diarrees } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { ChartService } from 'src/app/services/chart.service';
import { mapBooleanToString, mapColorToString } from 'src/app/helpers/utils';


@Component({
  selector: 'app-diarrees-registre',
  templateUrl: './diarrees-registre.page.html',
  styleUrls: ['./diarrees-registre.page.scss'],
})
export class DiarreesRegistrePage implements OnInit {

  @ViewChild('chart', {static: false}) chart;

  endpoint: string;
  dades: Diarrees[] = [];
  chartData: number [] = [];
  chartLabels: string [] = [];

  constructor(private dataService : DataService, private chartService : ChartService) { }

  ngOnInit() {
    this.endpoint = `/api/v1/diarrees/${this.dataService.getUsuariId()}`;
    this.loadData();
  }

  async loadData (){
    (await this.dataService.request<Diarrees[]>(this.endpoint)).subscribe(
      data => {
        this.dades = data;
        this.dades.forEach(dada => {
          this.chartData.push(dada.vegades);
          this.chartLabels.push('');
        });
        this.chartService.createBarChart(this.chart, 'Vegades', this.chartLabels, this.chartData);
        this.dataService.loadingControllerDismiss();
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error carregant");
      }
    );
  }

  mapBoolean(valor){
    return mapBooleanToString(valor);
  }

  mapColor(color){
    return mapColorToString(color);
  }

}
