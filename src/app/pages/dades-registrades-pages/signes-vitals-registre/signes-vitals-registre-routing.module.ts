import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignesVitalsRegistrePage } from './signes-vitals-registre.page';

const routes: Routes = [
  {
    path: '',
    component: SignesVitalsRegistrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignesVitalsRegistrePageRoutingModule {}
