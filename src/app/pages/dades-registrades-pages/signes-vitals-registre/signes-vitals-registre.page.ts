import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ChartService } from 'src/app/services/chart.service';
import { SigneVital } from 'src/interfaces/interfaces';
import { SIGNES_VITALS } from 'src/app/helpers/constants';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
 
@Component({
  selector: 'app-signes-vitals-registre',
  templateUrl: './signes-vitals-registre.page.html',
  styleUrls: ['./signes-vitals-registre.page.scss'],
})
export class SignesVitalsRegistrePage implements OnInit {

  @ViewChild('chart',{static:false}) chart;

  endpoint: string;

  chartData: number[] = [];
  labels: string [] = [];
  chartTitle: string = "Activitat";
  chartSelected: number = SIGNES_VITALS.ACTIVITAT;

  dades: SigneVital[] = [];
  dadesMostrades: SigneVital[] = [];

  constructor(private dataService : DataService, private chartService : ChartService) { }

  ngOnInit() {
    this.endpoint = `/api/v1/signesvitals/${this.dataService.getUsuariId()}`;
    this.loadData();
  }

  async loadData(){
    (await this.dataService.request<SigneVital[]>(this.endpoint)).subscribe(
      data => {
        this.dades = data;
        this.dades.forEach(signeVital => {
          if(signeVital.tipus === SIGNES_VITALS.ACTIVITAT){
            this.dadesMostrades.push(signeVital);
            this.chartData.push(signeVital.valor);
          }
          this.labels.push('');
        });

        this.chartService.createBarChart(this.chart, this.chartTitle, this.labels, this.chartData);
        this.dataService.loadingControllerDismiss();
      },
      error => {
        this.dataService.loadingControllerDismiss();
        this.dataService.presentToast("Error carregant");
      }
    );
  }


  canviarDadesGrafica(event){
    if(event.detail.value === this.chartSelected)
      return;

    this.dadesMostrades = [];
    this.chartData = [];

    this.dades.forEach(signeVital => {
      if(signeVital.tipus == event.detail.value){
        this.chartData.push(signeVital.valor);
        this.dadesMostrades.push(signeVital);
      }
    });

    switch(event.detail.value){
      case SIGNES_VITALS.ACTIVITAT:
        this.chartTitle = 'Activitat';
        this.chartSelected = SIGNES_VITALS.ACTIVITAT;
        break;
      case SIGNES_VITALS.TENSIO_ARTERIAL:
        this.chartTitle = 'Activitat';
        this.chartSelected = SIGNES_VITALS.ACTIVITAT;
        break;
      case SIGNES_VITALS.GLICEMIES:
        this.chartTitle = 'Activitat';
        this.chartSelected = SIGNES_VITALS.ACTIVITAT;
        break;
      case SIGNES_VITALS.TEMPREATURA:
        this.chartTitle = 'Activitat';
        this.chartSelected = SIGNES_VITALS.ACTIVITAT;
        break;
      case SIGNES_VITALS.PES:
        this.chartTitle = 'Activitat';
        this.chartSelected = SIGNES_VITALS.ACTIVITAT;
        break;
    }

    this.chartService.createBarChart(this.chart, this.chartTitle, this.labels, this.chartData);
  }
}
