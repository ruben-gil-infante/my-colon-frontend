import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulariMedicacioPage } from './formulari-medicacio.page';

const routes: Routes = [
  {
    path: '',
    component: FormulariMedicacioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulariMedicacioPageRoutingModule {}
