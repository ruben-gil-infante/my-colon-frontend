import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColostomiesPage } from './colostomies.page';

const routes: Routes = [
  {
    path: '',
    component: ColostomiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColostomiesPageRoutingModule {}
