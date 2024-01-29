import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmogusPageRoutingModule } from './amogus-routing.module';

import { AmogusPage } from './amogus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmogusPageRoutingModule
  ],
  declarations: [AmogusPage]
})
export class AmogusPageModule {}
