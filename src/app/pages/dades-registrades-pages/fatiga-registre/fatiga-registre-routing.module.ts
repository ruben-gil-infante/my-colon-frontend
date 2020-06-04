import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FatigaRegistrePage } from './fatiga-registre.page';

const routes: Routes = [
  {
    path: '',
    component: FatigaRegistrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FatigaRegistrePageRoutingModule {}
