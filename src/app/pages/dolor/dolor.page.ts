import { Component, OnInit, ViewChild } from '@angular/core';
import { RangeBarComponent } from 'src/app/components/range-bar/range-bar.component';

@Component({
  selector: 'app-dolor',
  templateUrl: './dolor.page.html',
  styleUrls: ['./dolor.page.scss'],
})
export class DolorPage implements OnInit {


  private dolor : number;

  private descriuDolor : string [] = [
    'Opressiu',
    'Constant',
    'Ardent',
    'Còlic',
    'Penetrant'
  ];

  private apareixDolor : string [] = [
    'En repòs',
    'En els canvis de posició',
    'Realitzant activitat física'
  ];

  constructor() { }

  ngOnInit() {
  }

  dolorSeleccionat ( event ){
    this.dolor = event;
  }

}
