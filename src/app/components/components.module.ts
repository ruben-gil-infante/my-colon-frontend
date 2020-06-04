import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RangeBarComponent } from './range-bar/range-bar.component';
import { SiNoSelectorComponent } from './si-no-selector/si-no-selector.component';
import { OpcionsSelectorComponent } from './opcions-selector/opcions-selector.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { SaveButtonComponent } from './save-button/save-button.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { FavButtonComponent } from './fav-button/fav-button.component';
import { FormsModule } from '@angular/forms';
import { PopoverItemComponent } from './popover-item/popover-item.component';
import { SigneVitalItemComponent } from './signe-vital-item/signe-vital-item.component';



@NgModule({
  declarations: [
    RangeBarComponent, 
    SiNoSelectorComponent, 
    OpcionsSelectorComponent, 
    DefaultHeaderComponent,
    SaveButtonComponent,
    DefaultFooterComponent,
    FavButtonComponent,
    PopoverItemComponent,
    SigneVitalItemComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    RangeBarComponent, 
    SiNoSelectorComponent, 
    OpcionsSelectorComponent, 
    DefaultHeaderComponent,
    SaveButtonComponent,
    DefaultFooterComponent,
    FavButtonComponent,
    PopoverItemComponent,
    SigneVitalItemComponent,
  ]
})
export class ComponentsModule { }
