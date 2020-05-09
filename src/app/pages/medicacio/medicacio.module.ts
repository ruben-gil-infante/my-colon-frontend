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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'medicacio-mati'
  },
  {
    path: '',
    component: MedicacioPage,
    children: [
      {
        path: 'medicacio-mati',
        loadChildren: '../medicacio-mati/medicacio-mati.module#MedicacioMatiPageModule'
      },
      {
        path: 'medicacio-tarda',
        loadChildren: '../medicacio-tarda/medicacio-tarda.module#MedicacioTardaPageModule'
      },
      {
        path: 'medicacio-nit',
        loadChildren: '../medicacio-nit/medicacio-nit.module#MedicacioNitPageModule'
      }
    ]
  }
];

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
