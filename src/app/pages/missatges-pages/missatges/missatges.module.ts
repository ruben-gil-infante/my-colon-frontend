import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissatgesPageRoutingModule } from './missatges-routing.module';

import { MissatgesPage } from './missatges.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissatgesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MissatgesPage]
})
export class MissatgesPageModule {}
