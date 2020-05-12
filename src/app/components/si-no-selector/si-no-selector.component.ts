import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Renderer2, ViewChildren, Renderer, ElementRef } from '@angular/core';
import { IonItem } from '@ionic/angular';

@Component({
  selector: 'app-si-no-selector',
  templateUrl: './si-no-selector.component.html',
  styleUrls: ['./si-no-selector.component.scss'],
})
export class SiNoSelectorComponent implements OnInit {

  @Input() pregunta : string;
  @Output() resposta = new EventEmitter<boolean>();

  fillSiButton: string = "outline"
  fillNoButton: string = "solid"
  valor: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  seleccionat(si){
    if(si){
      this.valor = true;
      this.fillSiButton = "solid";
      this.fillNoButton = "outline";
      this.resposta.emit(true);
    }else{
      this.valor = false;
      this.fillSiButton = "outline";
      this.fillNoButton  = "solid";
      this.resposta.emit(false);
    }
  }

}
