import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SigneVitalItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-signe-vital-item',
  templateUrl: './signe-vital-item.component.html',
  styleUrls: ['./signe-vital-item.component.scss'],
})
export class SigneVitalItemComponent implements OnInit {

  @Input() item: SigneVitalItem;
  @Output() guardarSigneVital = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  registrarSigneVital(){
    this.guardarSigneVital.emit(this.item);
  }

}
