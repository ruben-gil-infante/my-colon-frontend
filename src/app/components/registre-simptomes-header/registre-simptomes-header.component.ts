import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-registre-simptomes-header',
  templateUrl: './registre-simptomes-header.component.html',
  styleUrls: ['./registre-simptomes-header.component.scss'],
})
export class RegistreSimptomesHeaderComponent implements OnInit {

  @Input() nom : string;

  constructor() { }

  ngOnInit() {}

}
