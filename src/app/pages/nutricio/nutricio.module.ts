import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutricioPageRoutingModule } from './nutricio-routing.module';

import { NutricioPage } from './nutricio.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RangeBarComponent } from 'src/app/components/range-bar/range-bar.component';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';
import { SaveButtonComponent } from 'src/app/components/save-button/save-button.component';

@NgModule({
  entryComponents: [
    RangeBarComponent, 
    DefaultHeaderComponent,
    SaveButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutricioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NutricioPage]
})
export class NutricioPageModule {}
