import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestrenyimentRegistrePageRoutingModule } from './reestrenyiment-registre-routing.module';

import { ReestrenyimentRegistrePage } from './reestrenyiment-registre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestrenyimentRegistrePageRoutingModule
  ],
  declarations: [ReestrenyimentRegistrePage]
})
export class ReestrenyimentRegistrePageModule {}
