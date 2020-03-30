import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FatigaPageRoutingModule } from './fatiga-routing.module';

import { FatigaPage } from './fatiga.page';
import { RangeBarComponent } from 'src/app/components/range-bar/range-bar.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SiNoSelectorComponent } from 'src/app/components/si-no-selector/si-no-selector.component';
import { RegistreSimptomesHeaderComponent } from 'src/app/components/registre-simptomes-header/registre-simptomes-header.component';
import { OpcionsSelectorComponent } from 'src/app/components/opcions-selector/opcions-selector.component';

@NgModule({
  entryComponents: [RangeBarComponent, SiNoSelectorComponent, RegistreSimptomesHeaderComponent, OpcionsSelectorComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FatigaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FatigaPage]
})
export class FatigaPageModule {}
