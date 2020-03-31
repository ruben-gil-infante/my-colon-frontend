import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunitatPageRoutingModule } from './comunitat-routing.module';

import { ComunitatPage } from './comunitat.page';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  entryComponents: [
    DefaultHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunitatPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ComunitatPage]
})
export class ComunitatPageModule {}
