import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmogusNewPage } from './amogus-new.page';

const routes: Routes = [
  {
    path: '',
    component: AmogusNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmogusNewPageRoutingModule {}
