import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutricioPage } from './nutricio.page';

const routes: Routes = [
  {
    path: '',
    component: NutricioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutricioPageRoutingModule {}
