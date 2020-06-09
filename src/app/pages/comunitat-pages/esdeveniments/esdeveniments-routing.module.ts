import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsdevenimentsPage } from './esdeveniments.page';

const routes: Routes = [
  {
    path: '',
    component: EsdevenimentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsdevenimentsPageRoutingModule {}
