import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Renderer2, ViewChildren, Renderer, ElementRef } from '@angular/core';
import { IonItem } from '@ionic/angular';

@Component({
  selector: 'app-si-no-selector',
  templateUrl: './si-no-selector.component.html',
  styleUrls: ['./si-no-selector.component.scss'],
})
export class SiNoSelectorComponent implements OnInit {

  @Input() pregunta : string;
  valor: boolean;

  fillSiButton: string = "outline"
  fillNoButton: string = "solid"

  @Output() resposta = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  seleccionat(si){
    if(si){
      this.valor = true;
      this.fillSiButton = "solid";
      this.fillNoButton = "outline";
    }else{
      this.valor = false;
      this.fillSiButton = "outline";
      this.fillNoButton  = "solid";
    }

    this.resposta.emit(this.valor);
  }

}
