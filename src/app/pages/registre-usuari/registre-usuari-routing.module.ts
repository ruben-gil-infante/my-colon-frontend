import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistreUsuariPage } from './registre-usuari.page';

const routes: Routes = [
  {
    path: '',
    component: RegistreUsuariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistreUsuariPageRoutingModule {}
