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

  constructor() {
  }

  ngOnInit() {
  }

}
