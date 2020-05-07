import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortalInformatiuPageRoutingModule } from './portal-informatiu-routing.module';

import { PortalInformatiuPage } from './portal-informatiu.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';

@NgModule({
  entryComponents: [DefaultHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortalInformatiuPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PortalInformatiuPage]
})
export class PortalInformatiuPageModule {}
