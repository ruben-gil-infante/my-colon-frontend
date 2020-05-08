import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicacioNitPage } from './medicacio-nit.page';

const routes: Routes = [
  {
    path: '',
    component: MedicacioNitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicacioNitPageRoutingModule {}
