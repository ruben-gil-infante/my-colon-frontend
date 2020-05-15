import { Component, OnInit } from '@angular/core';
import { SigneVitalItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-signes-vitals',
  templateUrl: './signes-vitals.page.html',
  styleUrls: ['./signes-vitals.page.scss'],
})
export class SignesVitalsPage implements OnInit {

  signesVitals: SigneVitalItem [] = [
    {tipus: 1, nom: 'Activitat', descripcio: 'Passos', valor: 0, img: "../../../assets/icon/person-run.svg"},
    {tipus: 2, nom: 'Tensió arterial', descripcio: 'mmHg', valor: 0, img: "../../../assets/icon/blood-pressure.svg"},
    {tipus: 3, nom: 'Glicèmies', descripcio: 'mg/dl', valor: 0, img: "../../../assets/icon/hemoglobin-test-meter.svg"},
    {tipus: 4, nom: 'Freqüència cardaca', descripcio: 'bpm', valor: 0, img: "../../../assets/icon/heart-frequency.svg"},
    {tipus: 5, nom: 'Temperatura', descripcio: 'ºC', valor: 0, img: "../../../assets/icon/thermometer.svg"},
    {tipus: 6, nom: 'Pes', descripcio: 'Kg', valor: 0, img: "../../../assets/icon/balance.svg"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
