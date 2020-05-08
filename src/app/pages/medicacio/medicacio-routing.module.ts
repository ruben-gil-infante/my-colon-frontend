import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicacioPage } from './medicacio.page';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicacioPageRoutingModule {}
