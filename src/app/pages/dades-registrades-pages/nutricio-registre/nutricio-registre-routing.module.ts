import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutricioRegistrePage } from './nutricio-registre.page';

const routes: Routes = [
  {
    path: '',
    component: NutricioRegistrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutricioRegistrePageRoutingModule {}
