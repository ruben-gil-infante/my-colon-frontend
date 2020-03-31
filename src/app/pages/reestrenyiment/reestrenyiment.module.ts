import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestrenyimentPageRoutingModule } from './reestrenyiment-routing.module';

import { ReestrenyimentPage } from './reestrenyiment.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { FemtaPopoverComponent } from 'src/app/components/femta-popover/femta-popover.component';
import { ColorFemtaSelectorComponent } from 'src/app/components/color-femta-selector/color-femta-selector.component';
import { EscalaBristolSelectorComponent } from 'src/app/components/escala-bristol-selector/escala-bristol-selector.component';
import { SiNoSelectorComponent } from 'src/app/components/si-no-selector/si-no-selector.component';
import { OpcionsSelectorComponent } from 'src/app/components/opcions-selector/opcions-selector.component';
import { SaveButtonComponent } from 'src/app/components/save-button/save-button.component';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';

@NgModule({
  entryComponents: [FemtaPopoverComponent, 
    ColorFemtaSelectorComponent,
    EscalaBristolSelectorComponent,
    SiNoSelectorComponent, 
    OpcionsSelectorComponent,
    DefaultHeaderComponent,
    SaveButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestrenyimentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReestrenyimentPage]
})
export class ReestrenyimentPageModule {}
