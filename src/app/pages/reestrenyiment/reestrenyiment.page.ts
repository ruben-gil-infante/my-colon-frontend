import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { FemtaPopoverComponent } from 'src/app/components/femta-popover/femta-popover.component';

@Component({
  selector: 'app-reestrenyiment',
  templateUrl: './reestrenyiment.page.html',
  styleUrls: ['./reestrenyiment.page.scss'],
})
export class ReestrenyimentPage implements OnInit {

  ultimCopVentre : string [] = [

    'Avui',
    'Ahir',
    'Fa 2 dies',
    'Fa 3 dies',
    'Fa 4 dies',
    'Fa més de 5 dies'
  ]

  ultimaFemtaEscalaBristol : number;

  constructor() { }

  ngOnInit() {
  }

}
