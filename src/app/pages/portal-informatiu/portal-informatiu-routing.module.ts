import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalInformatiuPage } from './portal-informatiu.page';

const routes: Routes = [
  {
    path: '',
    component: PortalInformatiuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalInformatiuPageRoutingModule {}
