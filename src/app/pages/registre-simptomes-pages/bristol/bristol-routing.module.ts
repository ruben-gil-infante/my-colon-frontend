import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BristolPage } from './bristol.page';

const routes: Routes = [
  {
    path: '',
    component: BristolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BristolPageRoutingModule {}
