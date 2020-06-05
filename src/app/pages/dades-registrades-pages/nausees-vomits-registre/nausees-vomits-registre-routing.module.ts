import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NauseesVomitsRegistrePage } from './nausees-vomits-registre.page';

const routes: Routes = [
  {
    path: '',
    component: NauseesVomitsRegistrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NauseesVomitsRegistrePageRoutingModule {}
