import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsdevenimentsPageRoutingModule } from './esdeveniments-routing.module';

import { EsdevenimentsPage } from './esdeveniments.page';
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
    EsdevenimentsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EsdevenimentsPage]
})
export class EsdevenimentsPageModule {}
