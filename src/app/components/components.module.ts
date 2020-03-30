import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FemtaPopoverComponent } from './femta-popover/femta-popover.component';
import { IonicModule } from '@ionic/angular';
import { RangeBarComponent } from './range-bar/range-bar.component';
import { ColorFemtaSelectorComponent } from './color-femta-selector/color-femta-selector.component';
import { EscalaBristolSelectorComponent } from './escala-bristol-selector/escala-bristol-selector.component';
import { SiNoSelectorComponent } from './si-no-selector/si-no-selector.component';
import { OpcionsSelectorComponent } from './opcions-selector/opcions-selector.component';
import { RegistreSimptomesHeaderComponent } from './registre-simptomes-header/registre-simptomes-header.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';



@NgModule({
  declarations: [FemtaPopoverComponent, 
    RangeBarComponent, 
    ColorFemtaSelectorComponent, 
    EscalaBristolSelectorComponent, 
    SiNoSelectorComponent, 
    OpcionsSelectorComponent, 
    RegistreSimptomesHeaderComponent,
    DefaultHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FemtaPopoverComponent,
    RangeBarComponent, 
    ColorFemtaSelectorComponent, 
    EscalaBristolSelectorComponent, 
    SiNoSelectorComponent, 
    OpcionsSelectorComponent, 
    RegistreSimptomesHeaderComponent,
    DefaultHeaderComponent
  ]
})
export class ComponentsModule { }
