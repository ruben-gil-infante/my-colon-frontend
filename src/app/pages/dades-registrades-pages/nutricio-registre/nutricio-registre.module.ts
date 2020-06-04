import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutricioRegistrePageRoutingModule } from './nutricio-registre-routing.module';

import { NutricioRegistrePage } from './nutricio-registre.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';

@NgModule({
  entryComponents: [
    DefaultHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutricioRegistrePageRoutingModule,
    ComponentsModule
  ],
  declarations: [NutricioRegistrePage]
})
export class NutricioRegistrePageModule {}
