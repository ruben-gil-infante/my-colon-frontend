import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DolorRegistrePageRoutingModule } from './dolor-registre-routing.module';

import { DolorRegistrePage } from './dolor-registre.page';
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
    DolorRegistrePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DolorRegistrePage]
})
export class DolorRegistrePageModule {}
