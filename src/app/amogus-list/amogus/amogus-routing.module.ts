import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmogusPage } from './amogus.page';

const routes: Routes = [
  {
    path: '',
    component: AmogusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmogusPageRoutingModule {}
