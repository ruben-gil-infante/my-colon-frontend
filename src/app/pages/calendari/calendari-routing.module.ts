import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendariPage } from './calendari.page';

const routes: Routes = [
  {
    path: '',
    component: CalendariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendariPageRoutingModule {}
