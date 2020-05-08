import { Component, OnInit } from '@angular/core';
import { Medicacio } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-medicacio-nit',
  templateUrl: './medicacio-nit.page.html',
  styleUrls: ['./medicacio-nit.page.scss'],
})
export class MedicacioNitPage implements OnInit {

  medicacions : Medicacio [] = [];
  constructor() { }

  ngOnInit() {
  }

  afegirMedicacio(){
    console.log("Afegir medicacio nit");
  }

}
