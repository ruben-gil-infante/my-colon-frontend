import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicacioTardaPage } from './medicacio-tarda.page';

const routes: Routes = [
  {
    path: '',
    component: MedicacioTardaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicacioTardaPageRoutingModule {}
