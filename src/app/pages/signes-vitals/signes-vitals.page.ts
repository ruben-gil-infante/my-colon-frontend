import { Component, OnInit } from '@angular/core';
import { SigneVitalItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { getCurrentDate } from 'src/app/helpers/utils';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-signes-vitals',
  templateUrl: './signes-vitals.page.html',
  styleUrls: ['./signes-vitals.page.scss'],
})
export class SignesVitalsPage implements OnInit {

  endpoint: string = '/api/v1/signesvitals';
  signesVitals: SigneVitalItem [] = [
    {tipus: 1, nom: 'Activitat', descripcio: 'Passos', valor: undefined, valorSecundari: -1, img: "../../../assets/icon/person-run.svg"},
    {tipus: 3, nom: 'Glicèmies', descripcio: 'mg/dl', valor: undefined, valorSecundari: -1, img: "../../../assets/icon/hemoglobin-test-meter.svg"},
    {tipus: 4, nom: 'Freqüència cardíaca', descripcio: 'bpm', valor: undefined, valorSecundari: -1, img: "../../../assets/icon/heart-frequency.svg"},
    {tipus: 5, nom: 'Temperatura', descripcio: 'ºC', valor: undefined, valorSecundari: -1, img: "../../../assets/icon/thermometer.svg"},
    {tipus: 6, nom: 'Pes', descripcio: 'Kg', valor: undefined, valorSecundari: -1, img: "../../../assets/icon/balance.svg"},
  ];
  tensioArterial: SigneVitalItem = {tipus: 2, nom: 'Tensió arterial', descripcio: 'mmHg', valor: undefined, valorSecundari: undefined, img: "../../../assets/icon/blood-pressure.svg"};

  constructor(private dataSerivce : DataService) { }

  ngOnInit() {
  }

  async guardarSigneVital ( event, tensio = false){
    let signeVitalForm = {};
    
    if(tensio){
      if(!this.checkValorsTensioArterial()){
        this.dataSerivce.presentToast("Els valors introduïts no són correctes");
        return;
      }

      signeVitalForm = {
        usuari: this.dataSerivce.getUsuariId(),
        valor: this.tensioArterial.valor,
        valorSecundari: this.tensioArterial.valorSecundari,
        tipus: this.tensioArterial.tipus,
        data: getCurrentDate()
      }
    
    }else{
      signeVitalForm = {
        usuari: this.dataSerivce.getUsuariId(),
        valor: event.valor,
        tipus: event.tipus,
        valorSecundari: -1,
        data: getCurrentDate(),
      };
    }

    
    (await this.dataSerivce.submit(this.endpoint, signeVitalForm)).subscribe(
      data => {
        this.dataSerivce.loadingControllerDismiss();
        this.dataSerivce.presentToast("Guardat amb èxit...");
      },
      error => {
        this.dataSerivce.loadingControllerDismiss();
        this.dataSerivce.presentToast("Error guardant...");
      }
    );
  }

  checkValorsTensioArterial(){
    if(this.tensioArterial.valor === undefined || this.tensioArterial.valorSecundari === undefined){
      return false;
    }

    if(this.tensioArterial.valor < 0 || this.tensioArterial.valorSecundari < 0){
      return false;
    }

    return true;
  }
}
