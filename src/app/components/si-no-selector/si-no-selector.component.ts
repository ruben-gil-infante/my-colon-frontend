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
  
  constructor() { }

  ngOnInit() {
  }

  si( event ){
  }

  no( event ){
  }

}
