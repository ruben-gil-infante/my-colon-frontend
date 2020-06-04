import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanvisBucalsRegistrePage } from './canvis-bucals-registre.page';

const routes: Routes = [
  {
    path: '',
    component: CanvisBucalsRegistrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanvisBucalsRegistrePageRoutingModule {}
