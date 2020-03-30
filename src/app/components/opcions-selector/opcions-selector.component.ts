import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opcions-selector',
  templateUrl: './opcions-selector.component.html',
  styleUrls: ['./opcions-selector.component.scss'],
})
export class OpcionsSelectorComponent implements OnInit {

  @Input() items : string [];
  @Input() titol : string;

  constructor() { }

  ngOnInit() {}

}
