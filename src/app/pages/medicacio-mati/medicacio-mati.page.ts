import { Component, OnInit } from '@angular/core';
import { Medicacio } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-medicacio-mati',
  templateUrl: './medicacio-mati.page.html',
  styleUrls: ['./medicacio-mati.page.scss'],
})
export class MedicacioMatiPage implements OnInit {

  medicacions : Medicacio [] = [
    {
      usuari: 1,
      dosi: 2,
      nom: 'Pred Forte',
      tipus: 1,
      horari: '3 cops al dia',
      data: new Date().toISOString()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  // FIXME: MOSTRAR EL FORMULARI EN FORMA D'ALERTA
  afegirMedicacio(){
    console.log("Afegir medicacio mati");
  }
}
