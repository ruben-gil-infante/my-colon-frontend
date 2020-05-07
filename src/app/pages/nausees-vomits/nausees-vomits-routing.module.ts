import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NauseesVomitsPage } from './nausees-vomits.page';

const routes: Routes = [
  {
    path: '',
    component: NauseesVomitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NauseesVomitsPageRoutingModule {}
