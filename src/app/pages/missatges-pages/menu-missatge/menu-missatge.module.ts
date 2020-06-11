import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuMissatgePageRoutingModule } from './menu-missatge-routing.module';

import { MenuMissatgePage } from './menu-missatge.page';
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
    MenuMissatgePageRoutingModule,
    ComponentsModule
  ],
  declarations: [MenuMissatgePage]
})
export class MenuMissatgePageModule {}
