import { Component, OnInit } from '@angular/core';
import { OptionItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-nausees-vomits',
  templateUrl: './nausees-vomits.page.html',
  styleUrls: ['./nausees-vomits.page.scss'],
})
export class NauseesVomitsPage implements OnInit {

  nausees : OptionItem [] = [
    {id: 1, text: 'Un cop o dos al dia', checked: false}, 
    {id: 2, text: 'Més de dos cops al dia', checked: false}
  ];
  
    descripcioVomit : OptionItem [] = [
    {id: 1, text: 'Contingut alimentici', checked: false},
    {id: 2, text: 'Mucós', checked: false},
    {id: 3, text: 'Biliós (tonalitat verda)', checked: false},
    {id: 4, text: 'Hemàtic (presència de sang)', checked: false}
  ]

  constructor() { }

  ngOnInit() {
  }

}
