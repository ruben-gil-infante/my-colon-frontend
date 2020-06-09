import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OptionItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-opcions-selector',
  templateUrl: './opcions-selector.component.html',
  styleUrls: ['./opcions-selector.component.scss'],
})
export class OpcionsSelectorComponent implements OnInit {

  @Input() items : OptionItem [];
  @Input() titol : string;
  @Input() unique: boolean = false;
  @Output() itemSeleccionat = new EventEmitter();

  itemActual : OptionItem = undefined;

  constructor() {
  }

  ngOnInit() {
  }

  seleccionat(event){
    this.itemSeleccionat.emit(event);
    
    if(this.unique){
      this.desSeleccionar(event);
    }
  
  }

  desSeleccionar(event){
    if(this.itemActual == undefined){
      this.itemActual = event;
    }else{
      this.itemActual.checked = false;
      this.itemActual = event;
    }
  }

}
