import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunitatPage } from './comunitat.page';

const routes: Routes = [
  {
    path: '',
    component: ComunitatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunitatPageRoutingModule {}
