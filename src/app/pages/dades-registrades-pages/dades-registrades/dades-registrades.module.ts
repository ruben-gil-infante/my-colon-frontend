import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadesRegistradesPageRoutingModule } from './dades-registrades-routing.module';

import { DadesRegistradesPage } from './dades-registrades.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadesRegistradesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DadesRegistradesPage]
})
export class DadesRegistradesPageModule {}
