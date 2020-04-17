import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicacioPageRoutingModule } from './medicacio-routing.module';

import { MedicacioPage } from './medicacio.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicacioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MedicacioPage]
})
export class MedicacioPageModule {}
