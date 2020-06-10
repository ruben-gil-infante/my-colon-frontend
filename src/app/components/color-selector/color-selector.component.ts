import { Component, OnInit, Output, EventEmitter } from '@angular/core';


  @Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
})
export class ColorSelectorComponent implements OnInit {

  @Output() colorSeleccionat = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  enviarColorSeleccionat(event){
    this.colorSeleccionat.emit(event.detail.value);
  }

}
