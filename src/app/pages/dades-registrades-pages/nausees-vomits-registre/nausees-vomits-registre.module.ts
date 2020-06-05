import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NauseesVomitsRegistrePageRoutingModule } from './nausees-vomits-registre-routing.module';

import { NauseesVomitsRegistrePage } from './nausees-vomits-registre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NauseesVomitsRegistrePageRoutingModule
  ],
  declarations: [NauseesVomitsRegistrePage]
})
export class NauseesVomitsRegistrePageModule {}
