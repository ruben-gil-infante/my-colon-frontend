import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignesVitalsPage } from './signes-vitals.page';

const routes: Routes = [
  {
    path: '',
    component: SignesVitalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignesVitalsPageRoutingModule {}
