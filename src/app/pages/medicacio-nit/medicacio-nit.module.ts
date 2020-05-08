import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicacioNitPageRoutingModule } from './medicacio-nit-routing.module';

import { MedicacioNitPage } from './medicacio-nit.page';
import { FavButtonComponent } from 'src/app/components/fav-button/fav-button.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  entryComponents:[
    FavButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicacioNitPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MedicacioNitPage]
})
export class MedicacioNitPageModule {}
