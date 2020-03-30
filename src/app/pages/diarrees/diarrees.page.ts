import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diarrees',
  templateUrl: './diarrees.page.html',
  styleUrls: ['./diarrees.page.scss'],
})
export class DiarreesPage implements OnInit {

  vegades : string [] = [
    '1',
    '2',
    '3',
    '4',
    'Més de 5'
  ]

  constructor() { }

  ngOnInit() {
  }

}
