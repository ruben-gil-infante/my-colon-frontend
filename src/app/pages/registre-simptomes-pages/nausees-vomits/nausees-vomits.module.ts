import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NauseesVomitsPageRoutingModule } from './nausees-vomits-routing.module';

import { NauseesVomitsPage } from './nausees-vomits.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SiNoSelectorComponent } from 'src/app/components/si-no-selector/si-no-selector.component';
import { OpcionsSelectorComponent } from 'src/app/components/opcions-selector/opcions-selector.component';
import { SaveButtonComponent } from 'src/app/components/save-button/save-button.component';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';

@NgModule({
  entryComponents: [
    SiNoSelectorComponent, 
    OpcionsSelectorComponent, 
    OpcionsSelectorComponent,
    DefaultHeaderComponent,
    SaveButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NauseesVomitsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NauseesVomitsPage]
})
export class NauseesVomitsPageModule {}
