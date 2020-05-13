import { Component, OnInit } from '@angular/core';
import { OptionItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-diarrees',
  templateUrl: './diarrees.page.html',
  styleUrls: ['./diarrees.page.scss'],
})
export class DiarreesPage implements OnInit {

  vegades : OptionItem [] = [
    {id: 0, text: '1', checked: true},
    {id: 1, text: '2', checked: true},
    {id: 2, text: '3', checked: true},
    {id: 3, text: '4', checked: true},
    {id: 4, text:'Més de 5', checked: true}
  ]

  constructor() { }

  ngOnInit() {
  }

}
