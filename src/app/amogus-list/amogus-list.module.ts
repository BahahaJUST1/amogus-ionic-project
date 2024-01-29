import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmogusListPageRoutingModule } from './amogus-list-routing.module';

import { AmogusListPage } from './amogus-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmogusListPageRoutingModule
  ],
  declarations: [AmogusListPage]
})
export class AmogusListPageModule {}
