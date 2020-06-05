import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NauseesVomitsRegistrePageRoutingModule } from './nausees-vomits-registre-routing.module';

import { NauseesVomitsRegistrePage } from './nausees-vomits-registre.page';
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
    NauseesVomitsRegistrePageRoutingModule,
    ComponentsModule
  ],
  declarations: [NauseesVomitsRegistrePage]
})
export class NauseesVomitsRegistrePageModule {}
