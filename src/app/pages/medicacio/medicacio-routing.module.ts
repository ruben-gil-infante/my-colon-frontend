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
        loadChildren: () => import ('../medicacio-mati/medicacio-mati.module').then(m => m.MedicacioMatiPageModule)
      },
      {
        path: 'medicacio-tarda',
        loadChildren: () => import ('../medicacio-tarda/medicacio-tarda.module').then(m => m.MedicacioTardaPageModule)
      },
      {
        path: 'medicacio-nit',
        loadChildren: () => import ('../medicacio-nit/medicacio-nit.module').then(m => m.MedicacioNitPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicacioPageRoutingModule {}
