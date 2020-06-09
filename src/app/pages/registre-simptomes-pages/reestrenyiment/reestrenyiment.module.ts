import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestrenyimentPageRoutingModule } from './reestrenyiment-routing.module';

import { ReestrenyimentPage } from './reestrenyiment.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SiNoSelectorComponent } from 'src/app/components/si-no-selector/si-no-selector.component';
import { OpcionsSelectorComponent } from 'src/app/components/opcions-selector/opcions-selector.component';
import { SaveButtonComponent } from 'src/app/components/save-button/save-button.component';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';
import { PopoverItemComponent } from 'src/app/components/popover-item/popover-item.component';
import { BristolPageModule } from '../bristol/bristol.module';

@NgModule({
  entryComponents: [
    SiNoSelectorComponent, 
    OpcionsSelectorComponent,
    DefaultHeaderComponent,
    SaveButtonComponent,
    PopoverItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestrenyimentPageRoutingModule,
    ComponentsModule,
    BristolPageModule
  ],
  declarations: [ReestrenyimentPage]
})
export class ReestrenyimentPageModule {}
