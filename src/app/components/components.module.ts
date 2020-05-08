import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FemtaPopoverComponent } from './femta-popover/femta-popover.component';
import { IonicModule } from '@ionic/angular';
import { RangeBarComponent } from './range-bar/range-bar.component';
import { ColorFemtaSelectorComponent } from './color-femta-selector/color-femta-selector.component';
import { EscalaBristolSelectorComponent } from './escala-bristol-selector/escala-bristol-selector.component';
import { SiNoSelectorComponent } from './si-no-selector/si-no-selector.component';
import { OpcionsSelectorComponent } from './opcions-selector/opcions-selector.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { SaveButtonComponent } from './save-button/save-button.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { FavButtonComponent } from './fav-button/fav-button.component';



@NgModule({
  declarations: [FemtaPopoverComponent, 
    RangeBarComponent, 
    ColorFemtaSelectorComponent, 
    EscalaBristolSelectorComponent, 
    SiNoSelectorComponent, 
    OpcionsSelectorComponent, 
    DefaultHeaderComponent,
    SaveButtonComponent,
    DefaultFooterComponent,
    FavButtonComponent
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
    DefaultHeaderComponent,
    SaveButtonComponent,
    DefaultFooterComponent,
    FavButtonComponent
  ]
})
export class ComponentsModule { }
