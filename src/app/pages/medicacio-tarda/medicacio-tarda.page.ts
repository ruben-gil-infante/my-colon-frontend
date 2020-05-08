import { Component, OnInit } from '@angular/core';
import { Medicacio } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-medicacio-tarda',
  templateUrl: './medicacio-tarda.page.html',
  styleUrls: ['./medicacio-tarda.page.scss'],
})
export class MedicacioTardaPage implements OnInit {

  medicacions : Medicacio [] = [];

  constructor() { }

  ngOnInit() {
  }

  afegirMedicacio(){
    console.log("Afegir Medicacio Tarda");
  }

}
