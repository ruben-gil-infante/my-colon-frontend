import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanvisBucalsRegistrePageRoutingModule } from './canvis-bucals-registre-routing.module';

import { CanvisBucalsRegistrePage } from './canvis-bucals-registre.page';
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
    CanvisBucalsRegistrePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CanvisBucalsRegistrePage]
})
export class CanvisBucalsRegistrePageModule {}
