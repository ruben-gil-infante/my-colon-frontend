import { Component, OnInit, ViewChild } from '@angular/core';
import { RangeBarComponent } from 'src/app/components/range-bar/range-bar.component';
import { OptionItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-dolor',
  templateUrl: './dolor.page.html',
  styleUrls: ['./dolor.page.scss'],
})
export class DolorPage implements OnInit {


  dolor : number;

  descriuDolor : OptionItem [] = [
    {id: 0, text: 'Opressiu', checked: false},
    {id: 1, text: 'Constant', checked: false},
    {id: 2, text: 'Ardent', checked: false},
    {id: 3, text: 'Còlic', checked: false},
    {id: 4, text: 'Penetrant', checked: false}
  ];

  apareixDolor : OptionItem [] = [
    {id: 0, text: 'En repòs', checked: false},
    {id: 1, text: 'En els canvis de posició', checked: false},
    {id: 2, text: 'Realitzant activitat física', checked: false}
  ];

  constructor() { }

  ngOnInit() {
  }

  dolorSeleccionat ( event ){
    this.dolor = event;
  }

}
