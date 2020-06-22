import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ChartService } from 'src/app/services/chart.service';
import { SigneVital } from 'src/interfaces/interfaces';
import { SIGNES_VITALS } from 'src/app/helpers/constants';
import { IfStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DiarreesRegistrePageModule } from '../diarrees-registre/diarrees-registre.module';
 
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


    let signeVitalSeleccionat = event.detail.value;

    if(signeVitalSeleccionat == SIGNES_VITALS.TENSIO_ARTERIAL){
      this.chartTitle = "Tensió arterial";
      this.chartSelected = SIGNES_VITALS.TENSIO_ARTERIAL;
      this.mostrarEstadistiquesTensioArterial();
      return;
    
    }else if (signeVitalSeleccionat == SIGNES_VITALS.ACTIVITAT){
      this.chartTitle = "Activitat";
      this.chartSelected = SIGNES_VITALS.ACTIVITAT;
    
    }else if (signeVitalSeleccionat == SIGNES_VITALS.GLICEMIES){
      this.chartTitle = "Glicèmies";
      this.chartSelected = SIGNES_VITALS.GLICEMIES;
    
    }else if (signeVitalSeleccionat == SIGNES_VITALS.TEMPERATURA){
      this.chartTitle = "Temperatura";
      this.chartSelected = SIGNES_VITALS.TEMPERATURA;
    
    }else if (signeVitalSeleccionat == SIGNES_VITALS.PES){  
      this.chartTitle = "Pes";
      this.chartSelected = SIGNES_VITALS.PES;
    
    }else{
      this.chartTitle = "Freqüència cardíaca";
      this.chartSelected = SIGNES_VITALS.FREQUENCIA_CARDIACA;
    }


    this.chartService.createBarChart(this.chart, this.chartTitle, this.labels, this.chartData);
  }

  mostrarEstadistiquesTensioArterial (){
    let sistole = [];
    let diastole = [];

    this.dades.forEach(signeVital => {
      if(signeVital.tipus === SIGNES_VITALS.TENSIO_ARTERIAL){
        sistole.push(signeVital.valor);
        diastole.push(signeVital.valorSecundari);
      }
    })

    let dataSet = [{
      label: "Sístole",
      data: sistole,
      borderColor: 'rgb(38, 194, 129)',
      borderWidth: 1
    },
    {
      label: "Diástole",
      data: diastole,
      borderColor: 'rgb(108, 184, 255)',
      borderWidth: 1
    }];

    this.chartService.createDoubleBarChart(this.chart, this.labels, dataSet);
  }
}
