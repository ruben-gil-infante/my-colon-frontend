import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissatgesPage } from './missatges.page';

const routes: Routes = [
  {
    path: '',
    component: MissatgesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissatgesPageRoutingModule {}
