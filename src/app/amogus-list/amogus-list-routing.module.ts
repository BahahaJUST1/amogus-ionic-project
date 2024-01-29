import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmogusListPage } from './amogus-list.page';

const routes: Routes = [
  {
    path: '',
    component: AmogusListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmogusListPageRoutingModule {}
