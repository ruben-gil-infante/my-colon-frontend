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
    {id: 0, text: 'Opressiu', notChecked: true},
    {id: 1, text: 'Constant', notChecked: true},
    {id: 2, text: 'Ardent', notChecked: true},
    {id: 3, text: 'Còlic', notChecked: true},
    {id: 4, text: 'Penetrant', notChecked: true}
  ];

  apareixDolor : OptionItem [] = [
    {id: 0, text: 'En repòs', notChecked: true},
    {id: 1, text: 'En els canvis de posició', notChecked: true},
    {id: 2, text: 'Realitzant activitat física', notChecked: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  dolorSeleccionat ( event ){
    this.dolor = event;
  }

}
