import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicacioMatiPageRoutingModule } from './medicacio-mati-routing.module';

import { MedicacioMatiPage } from './medicacio-mati.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { FavButtonComponent } from 'src/app/components/fav-button/fav-button.component';

@NgModule({
  entryComponents: [
    FavButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicacioMatiPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MedicacioMatiPage]
})
export class MedicacioMatiPageModule {}
