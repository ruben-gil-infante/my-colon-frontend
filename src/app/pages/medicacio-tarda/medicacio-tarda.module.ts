import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicacioTardaPageRoutingModule } from './medicacio-tarda-routing.module';

import { MedicacioTardaPage } from './medicacio-tarda.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { FavButtonComponent } from 'src/app/components/fav-button/fav-button.component';

@NgModule({
  entryComponents:[
    FavButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicacioTardaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MedicacioTardaPage]
})
export class MedicacioTardaPageModule {}
