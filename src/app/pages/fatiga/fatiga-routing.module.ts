import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FatigaPage } from './fatiga.page';

const routes: Routes = [
  {
    path: '',
    component: FatigaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FatigaPageRoutingModule {}
