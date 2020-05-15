import { Component, OnInit } from '@angular/core';
import { SigneVitalItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signes-vitals',
  templateUrl: './signes-vitals.page.html',
  styleUrls: ['./signes-vitals.page.scss'],
})
export class SignesVitalsPage implements OnInit {

  endpoint: string = '/api/v1/signesvitals';
  signesVitals: SigneVitalItem [] = [
    {tipus: 1, nom: 'Activitat', descripcio: 'Passos', valor: 0, img: "../../../assets/icon/person-run.svg"},
    {tipus: 2, nom: 'Tensió arterial', descripcio: 'mmHg', valor: 0, img: "../../../assets/icon/blood-pressure.svg"},
    {tipus: 3, nom: 'Glicèmies', descripcio: 'mg/dl', valor: 0, img: "../../../assets/icon/hemoglobin-test-meter.svg"},
    {tipus: 4, nom: 'Freqüència cardiaca', descripcio: 'bpm', valor: 0, img: "../../../assets/icon/heart-frequency.svg"},
    {tipus: 5, nom: 'Temperatura', descripcio: 'ºC', valor: 0, img: "../../../assets/icon/thermometer.svg"},
    {tipus: 6, nom: 'Pes', descripcio: 'Kg', valor: 0, img: "../../../assets/icon/balance.svg"},
  ];

  constructor(private dataSerivce : DataService) { }

  ngOnInit() {
  }

  async guardarSigneVital ( event ){
    let signeVitalForm = {
      usuari: this.dataSerivce.getUsuariId(),
      valor: event.valor,
      tipus: event.tipus,
      data: this.dataSerivce.getCurrentDate(),
    };
    
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
}
