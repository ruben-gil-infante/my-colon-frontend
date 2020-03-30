import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DolorPage } from './dolor.page';

const routes: Routes = [
  {
    path: '',
    component: DolorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DolorPageRoutingModule {}
