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
    {id: 0, text: 'Opressiu', checked: true},
    {id: 1, text: 'Constant', checked: true},
    {id: 2, text: 'Ardent', checked: true},
    {id: 3, text: 'Còlic', checked: true},
    {id: 4, text: 'Penetrant', checked: true}
  ];

  apareixDolor : OptionItem [] = [
    {id: 0, text: 'En repòs', checked: true},
    {id: 1, text: 'En els canvis de posició', checked: true},
    {id: 2, text: 'Realitzant activitat física', checked: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  dolorSeleccionat ( event ){
    this.dolor = event;
  }

}
