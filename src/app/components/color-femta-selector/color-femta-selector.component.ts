import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FemtaPopoverComponent } from '../femta-popover/femta-popover.component';

@Component({
  selector: 'app-color-femta-selector',
  templateUrl: './color-femta-selector.component.html',
  styleUrls: ['./color-femta-selector.component.scss'],
})
export class ColorFemtaSelectorComponent implements OnInit {

  colorSeleccionat : string = "Cap";

  constructor(private popoverCtrl : PopoverController) { }

  ngOnInit() {}

  async mostrarColorsFemta( event ){
    const popover = await this.popoverCtrl.create({
        component: FemtaPopoverComponent,
        event: event,
        mode: 'ios',
        backdropDismiss: false
      });

      await popover.present();

      // const { data } = await popover.onDidDismiss();
      const { data } = await popover.onWillDismiss();

      console.log('Padre:', data );
  }

}
