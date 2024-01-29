import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmogusNewPageRoutingModule } from './amogus-new-routing.module';

import { AmogusNewPage } from './amogus-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmogusNewPageRoutingModule
  ],
  declarations: [AmogusNewPage]
})
export class AmogusNewPageModule {}
