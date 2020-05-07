import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColostomiesPageRoutingModule } from './colostomies-routing.module';

import { ColostomiesPage } from './colostomies.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { DefaultHeaderComponent } from 'src/app/components/default-header/default-header.component';

@NgModule({
  entryComponents: [DefaultHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColostomiesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ColostomiesPage]
})
export class ColostomiesPageModule {}
