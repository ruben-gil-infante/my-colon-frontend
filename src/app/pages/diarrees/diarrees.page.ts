import { Component, OnInit } from '@angular/core';
import { OptionItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-diarrees',
  templateUrl: './diarrees.page.html',
  styleUrls: ['./diarrees.page.scss'],
})
export class DiarreesPage implements OnInit {

  vegades : OptionItem [] = [
    {id: 1, text: '1', checked: false},
    {id: 2, text: '2', checked: false},
    {id: 3, text: '3', checked: false},
    {id: 4, text: '4', checked: false},
    {id: 5, text:'Més de 5', checked: false}
  ]

  constructor() { }

  ngOnInit() {
  }

}
