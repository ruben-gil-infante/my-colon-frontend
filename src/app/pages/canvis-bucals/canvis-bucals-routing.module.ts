import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanvisBucalsPage } from './canvis-bucals.page';

const routes: Routes = [
  {
    path: '',
    component: CanvisBucalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanvisBucalsPageRoutingModule {}
