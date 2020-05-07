import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiarreesPageRoutingModule } from './diarrees-routing.module';

import { DiarreesPage } from './diarrees.page';
import { SiNoSelectorComponent } from 'src/app/components/si-no-selector/si-no-selector.component';
import { EscalaBristolSelectorComponent } from 'src/app/components/escala-bristol-selector/escala-bristol-selector.component';
import { ColorFemtaSelectorComponent } from 'src/app/components/color-femta-selector/color-femta-selector.component';
import { FemtaPopoverComponent } from 'src/app/components/femta-popover/femta-popover.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { OpcionsSelectorComponent } from 'src/app/components/opcions-selector/opcions-selector.component';
import { SaveButtonComponent } from 'src/app/components/save-button/save-button.component';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';

@NgModule({
  entryComponents: [
    SiNoSelectorComponent, 
    EscalaBristolSelectorComponent, 
    ColorFemtaSelectorComponent, 
    FemtaPopoverComponent, 
    OpcionsSelectorComponent,
    DefaultHeaderComponent,
    SaveButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiarreesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiarreesPage]
})
export class DiarreesPageModule {}
