import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarreesRegistrePageRoutingModule } from './diarrees-registre-routing.module';

import { DiarreesRegistrePage } from './diarrees-registre.page';
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
    DiarreesRegistrePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiarreesRegistrePage]
})
export class DiarreesRegistrePageModule {}
