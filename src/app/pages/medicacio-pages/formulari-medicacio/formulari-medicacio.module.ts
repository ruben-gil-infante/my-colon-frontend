import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulariMedicacioPageRoutingModule } from './formulari-medicacio-routing.module';

import { FormulariMedicacioPage } from './formulari-medicacio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulariMedicacioPageRoutingModule
  ],
  declarations: [FormulariMedicacioPage]
})
export class FormulariMedicacioPageModule {}
