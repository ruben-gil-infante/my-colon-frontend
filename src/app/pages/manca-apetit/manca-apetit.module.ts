import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MancaApetitPageRoutingModule } from './manca-apetit-routing.module';

import { MancaApetitPage } from './manca-apetit.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SiNoSelectorComponent } from 'src/app/components/si-no-selector/si-no-selector.component';
import { OpcionsSelectorComponent } from 'src/app/components/opcions-selector/opcions-selector.component';
import { SaveButtonComponent } from 'src/app/components/save-button/save-button.component';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';

@NgModule({
  entryComponents: [
    SiNoSelectorComponent, 
    OpcionsSelectorComponent,
    SaveButtonComponent,
    DefaultHeaderComponent
  ],
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
