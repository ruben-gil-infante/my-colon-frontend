import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicacioPageRoutingModule } from './medicacio-routing.module';

import { MedicacioPage } from './medicacio.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { Routes, RouterModule } from '@angular/router';
import { FormulariMedicacioPageModule } from '../formulari-medicacio/formulari-medicacio.module';
import { FavButtonComponent } from 'src/app/components/fav-button/fav-button.component';


@NgModule({
  entryComponents: [
    FavButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicacioPageRoutingModule,
    ComponentsModule,
    FormulariMedicacioPageModule
    
  ],
  declarations: [MedicacioPage, ]
})
export class MedicacioPageModule {}
