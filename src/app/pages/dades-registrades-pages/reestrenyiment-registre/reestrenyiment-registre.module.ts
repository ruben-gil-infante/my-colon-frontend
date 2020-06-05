import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestrenyimentRegistrePageRoutingModule } from './reestrenyiment-registre-routing.module';

import { ReestrenyimentRegistrePage } from './reestrenyiment-registre.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';

@NgModule({
  entryComponents:[
    DefaultHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestrenyimentRegistrePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReestrenyimentRegistrePage]
})
export class ReestrenyimentRegistrePageModule {}
