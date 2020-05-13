import { Component, OnInit } from '@angular/core';
import { OptionItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-nausees-vomits',
  templateUrl: './nausees-vomits.page.html',
  styleUrls: ['./nausees-vomits.page.scss'],
})
export class NauseesVomitsPage implements OnInit {

  nausees : OptionItem [] = [
    {id: 0, text: 'Un cop o dos al dia', checked: false}, 
    {id: 1, text: 'Més de dos cops al dia', checked: false}
  ];
  
  descripcioVomit : OptionItem [] = [
    {id: 0, text: 'Contingut alimentici', checked: false},
    {id: 1, text: 'Mucós', checked: false},
    {id: 2, text: 'Biliós (tonalitat verda)', checked: false},
    {id: 3, text: 'Hemàtic (presència de sang)', checked: false}
  ]

  constructor() { }

  ngOnInit() {
  }

  nauseesSeleccionat(event){
    console.log("Nausees seleccionat", event);
  }

  descripcioVomitSeleccionat(event){
    console.log("Descripcio vomit seleccionat", event);
  }

}
