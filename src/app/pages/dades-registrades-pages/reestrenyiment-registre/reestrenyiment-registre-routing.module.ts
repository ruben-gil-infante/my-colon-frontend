import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReestrenyimentRegistrePage } from './reestrenyiment-registre.page';

const routes: Routes = [
  {
    path: '',
    component: ReestrenyimentRegistrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReestrenyimentRegistrePageRoutingModule {}
