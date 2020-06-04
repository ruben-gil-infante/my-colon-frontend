import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DolorRegistrePage } from './dolor-registre.page';

const routes: Routes = [
  {
    path: '',
    component: DolorRegistrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DolorRegistrePageRoutingModule {}
