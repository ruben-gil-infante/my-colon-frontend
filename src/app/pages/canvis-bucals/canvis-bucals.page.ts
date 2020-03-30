import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvis-bucals',
  templateUrl: './canvis-bucals.page.html',
  styleUrls: ['./canvis-bucals.page.scss'],
})
export class CanvisBucalsPage implements OnInit {

  private simptomes : string [] = [
    'Boca seca',
    'Llenga enblanquida',
    'Boca amb és sensibilitat o dolor',
    'Canvis en el gust'
  ]

  constructor() { }

  ngOnInit() {
  }

}
