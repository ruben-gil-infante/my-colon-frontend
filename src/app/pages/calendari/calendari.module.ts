import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendariPageRoutingModule } from './calendari-routing.module';

import { CalendariPage } from './calendari.page';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  entryComponents: [DefaultHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendariPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CalendariPage]
})
export class CalendariPageModule {}
