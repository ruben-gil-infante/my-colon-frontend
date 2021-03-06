import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesPageRoutingModule } from './notes-routing.module';

import { NotesPage } from './notes.page';
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
    NotesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NotesPage]
})
export class NotesPageModule {}
