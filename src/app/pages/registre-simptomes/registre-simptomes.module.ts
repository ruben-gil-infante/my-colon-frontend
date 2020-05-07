import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistreSimptomesPageRoutingModule } from './registre-simptomes-routing.module';

import { RegistreSimptomesPage } from './registre-simptomes.page';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  entryComponents: [DefaultHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistreSimptomesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistreSimptomesPage]
})
export class RegistreSimptomesPageModule {}
