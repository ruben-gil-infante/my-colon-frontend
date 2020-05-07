import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MancaApetitPage } from './manca-apetit.page';

const routes: Routes = [
  {
    path: '',
    component: MancaApetitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MancaApetitPageRoutingModule {}
