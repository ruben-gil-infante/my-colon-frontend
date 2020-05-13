import { Component, OnInit } from '@angular/core';
import { OptionItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-diarrees',
  templateUrl: './diarrees.page.html',
  styleUrls: ['./diarrees.page.scss'],
})
export class DiarreesPage implements OnInit {

  vegades : OptionItem [] = [
    {id: 0, text: '1', notChecked: true},
    {id: 1, text: '2', notChecked: true},
    {id: 2, text: '3', notChecked: true},
    {id: 3, text: '4', notChecked: true},
    {id: 4, text:'Més de 5', notChecked: true}
  ]

  constructor() { }

  ngOnInit() {
  }

}
