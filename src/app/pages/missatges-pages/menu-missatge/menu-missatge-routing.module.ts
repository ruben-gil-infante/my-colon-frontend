import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuMissatgePage } from './menu-missatge.page';

const routes: Routes = [
  {
    path: '',
    component: MenuMissatgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuMissatgePageRoutingModule {}
