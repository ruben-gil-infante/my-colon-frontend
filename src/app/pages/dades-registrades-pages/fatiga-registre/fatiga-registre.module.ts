import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FatigaRegistrePageRoutingModule } from './fatiga-registre-routing.module';

import { FatigaRegistrePage } from './fatiga-registre.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';

@NgModule({
  entryComponents: [
    DefaultHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FatigaRegistrePageRoutingModule,
    ComponentsModule
  ],
  declarations: [FatigaRegistrePage]
})
export class FatigaRegistrePageModule {}
