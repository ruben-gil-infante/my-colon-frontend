import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-femta-popover',
  templateUrl: './femta-popover.component.html',
  styleUrls: ['./femta-popover.component.scss'],
})
export class FemtaPopoverComponent implements OnInit {

  @Output() colorFemtaSeleccionat = new EventEmitter();

  femtaColors : string [] = [
    'Marró',
    'Groc',
    'Verd',
    'Gris',
    'Vermell',
    'Negre'
  ]

  constructor(private popoverCtrl : PopoverController) { }

  ngOnInit() {}

  colorSeleccionat ( colorSeleccionat ) {
    this.popoverCtrl.dismiss({
      color : colorSeleccionat
    })
  }

}
