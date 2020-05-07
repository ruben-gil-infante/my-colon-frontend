import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Renderer2, ViewChildren } from '@angular/core';
import { IonItem } from '@ionic/angular';

@Component({
  selector: 'app-si-no-selector',
  templateUrl: './si-no-selector.component.html',
  styleUrls: ['./si-no-selector.component.scss'],
})
export class SiNoSelectorComponent implements OnInit {

  @Input() pregunta : string;
  @Output() resposta = new EventEmitter<boolean>();
  
  @ViewChildren("siButton") siButton : IonItem;

  constructor(private renderer : Renderer2) { }

  ngOnInit() {
    console.log(this.siButton);
  }

  si(){
    console.log("Seleccionat si");
  }

  no(){
    console.log("Seleccionat no");
  }

}
