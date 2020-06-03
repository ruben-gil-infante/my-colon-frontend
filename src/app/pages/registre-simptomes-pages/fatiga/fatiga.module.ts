import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FatigaPageRoutingModule } from './fatiga-routing.module';

import { FatigaPage } from './fatiga.page';
import { RangeBarComponent } from 'src/app/components/range-bar/range-bar.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SiNoSelectorComponent } from 'src/app/components/si-no-selector/si-no-selector.component';
import { OpcionsSelectorComponent } from 'src/app/components/opcions-selector/opcions-selector.component';
import { SaveButtonComponent } from 'src/app/components/save-button/save-button.component';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';

@NgModule({
  entryComponents: [
    RangeBarComponent, 
    SiNoSelectorComponent, 
    OpcionsSelectorComponent,
    DefaultHeaderComponent,
    SaveButtonComponent
  ],
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
