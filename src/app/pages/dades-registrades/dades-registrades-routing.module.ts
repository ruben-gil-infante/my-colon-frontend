import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadesRegistradesPage } from './dades-registrades.page';

const routes: Routes = [
  {
    path: '',
    component: DadesRegistradesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadesRegistradesPageRoutingModule {}
