import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarsePageRoutingModule } from './registrarse-routing.module';

import { RegistrarsePage } from './registrarse.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';
import { PopoverItemComponent } from 'src/app/components/popover-item/popover-item.component';

@NgModule({
  entryComponents: [
    DefaultHeaderComponent,
    PopoverItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarsePageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistrarsePage]
})
export class RegistrarsePageModule {}
