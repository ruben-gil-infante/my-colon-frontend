import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { FemtaPopoverComponent } from 'src/app/components/femta-popover/femta-popover.component';
import { OptionItem } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-reestrenyiment',
  templateUrl: './reestrenyiment.page.html',
  styleUrls: ['./reestrenyiment.page.scss'],
})
export class ReestrenyimentPage implements OnInit {

  ultimCopVentre : OptionItem [] = [

    {id: 0, text: 'Avui', notChecked: true},
    {id: 1, text: 'Ahir', notChecked: true},
    {id: 2, text: 'Fa 2 dies', notChecked: true},
    {id: 3, text: 'Fa 3 dies', notChecked: true},
    {id: 4, text: 'Fa 4 dies', notChecked: true},
    {id: 5, text: 'Fa més de 5 dies', notChecked: true}
  ]

  ultimaFemtaEscalaBristol : number;

  constructor() { }

  ngOnInit() {
  }

}
