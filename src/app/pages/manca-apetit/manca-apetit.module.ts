import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MancaApetitPageRoutingModule } from './manca-apetit-routing.module';

import { MancaApetitPage } from './manca-apetit.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SiNoSelectorComponent } from 'src/app/components/si-no-selector/si-no-selector.component';
import { RegistreSimptomesHeaderComponent } from 'src/app/components/registre-simptomes-header/registre-simptomes-header.component';
import { OpcionsSelectorComponent } from 'src/app/components/opcions-selector/opcions-selector.component';

@NgModule({
  entryComponents: [SiNoSelectorComponent, RegistreSimptomesHeaderComponent, OpcionsSelectorComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MancaApetitPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MancaApetitPage]
})
export class MancaApetitPageModule {}
