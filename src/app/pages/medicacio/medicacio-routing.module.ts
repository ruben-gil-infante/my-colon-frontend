import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicacioPage } from './medicacio.page';

const routes: Routes = [
  {
    path: '',
    component: MedicacioPage
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicacioPageRoutingModule {}
