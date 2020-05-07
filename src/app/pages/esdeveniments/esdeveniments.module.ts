import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsdevenimentsPageRoutingModule } from './esdeveniments-routing.module';

import { EsdevenimentsPage } from './esdeveniments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsdevenimentsPageRoutingModule
  ],
  declarations: [EsdevenimentsPage]
})
export class EsdevenimentsPageModule {}
