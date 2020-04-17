import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistreUsuariPageRoutingModule } from './registre-usuari-routing.module';

import { RegistreUsuariPage } from './registre-usuari.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistreUsuariPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistreUsuariPage]
})
export class RegistreUsuariPageModule {}
