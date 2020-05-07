import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-si-no-selector',
  templateUrl: './si-no-selector.component.html',
  styleUrls: ['./si-no-selector.component.scss'],
})
export class SiNoSelectorComponent implements OnInit {

  @Input() pregunta : string;

  constructor() { }

  ngOnInit() {}

}
