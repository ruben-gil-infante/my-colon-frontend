import { Component, OnInit } from '@angular/core';
import { OptionItem } from 'src/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nausees-vomits',
  templateUrl: './nausees-vomits.page.html',
  styleUrls: ['./nausees-vomits.page.scss'],
})
export class NauseesVomitsPage implements OnInit {

  usuari: number;
  endpoint: string = 'api/v1/vomits';
  afirmatiu: boolean = true;
  avui: boolean = false;

  nausees : OptionItem [] = [
    {id: 0, text: 'Un cop o dos al dia', notChecked: true}, 
    {id: 1, text: 'Més de dos cops al dia', notChecked: true}
  ];
  
  descripcioVomit : OptionItem [] = [
    {id: 0, text: 'Contingut alimentici', notChecked: true},
    {id: 1, text: 'Mucós', notChecked: true},
    {id: 2, text: 'Biliós (tonalitat verda)', notChecked: true},
    {id: 3, text: 'Hemàtic (presència de sang)', notChecked: true}
  ]

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.usuari = this.dataService.getUsuariId();
  }

  afirmatiuSeleccionat(event){
    this.afirmatiu = event;
  }

  avuiSeleccionat(event){
    this.avui = event;
  }

  guardar(){
    let vomit = {
      usuari: this.usuari,
      afirmatiu: this.afirmatiu,
      avui: this.avui,
      descripcio: '',
      cops: ''
    };

    console.log("Guardar", vomit);
  }

}
