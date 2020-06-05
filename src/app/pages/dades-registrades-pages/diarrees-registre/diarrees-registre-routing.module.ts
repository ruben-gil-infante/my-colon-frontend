import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiarreesRegistrePage } from './diarrees-registre.page';

const routes: Routes = [
  {
    path: '',
    component: DiarreesRegistrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiarreesRegistrePageRoutingModule {}
