import { Component, OnInit } from '@angular/core';
import { OptionItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-canvis-bucals',
  templateUrl: './canvis-bucals.page.html',
  styleUrls: ['./canvis-bucals.page.scss'],
})
export class CanvisBucalsPage implements OnInit {

  simptomes : OptionItem [] = [
    {id: 1, text: 'Boca seca', checked: false},
    {id: 2, text: 'Llenga enblanquida', checked: false},
    {id: 3, text: 'Boca amb és sensibilitat o dolor', checked: false},
    {id: 4, text: 'Canvis en el gust', checked: false}
  ]

  constructor() { }

  ngOnInit() {
  }

}
