import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignesVitalsPageRoutingModule } from './signes-vitals-routing.module';

import { SignesVitalsPage } from './signes-vitals.page';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  entryComponents: [DefaultHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignesVitalsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SignesVitalsPage]
})
export class SignesVitalsPageModule {}
