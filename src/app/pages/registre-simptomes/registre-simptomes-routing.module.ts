import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistreSimptomesPage } from './registre-simptomes.page';

const routes: Routes = [
  {
    path: '',
    component: RegistreSimptomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistreSimptomesPageRoutingModule {}
