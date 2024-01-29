import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
    {
        path: '',
        component: TabPage,
        children: [

            {
                path: '',
                redirectTo: "/home",
                pathMatch: "full"
            },  
            {
                path: "home",
                loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
            },
            {
                path: 'amogus',
                loadChildren: () => import('../amogus-list/amogus-list.module').then( m => m.AmogusListPageModule)
            },
            {
                path: 'add',
                loadChildren: () => import('../amogus-new/amogus-new.module').then( m => m.AmogusNewPageModule)
            },
            {
                path: 'about',
                loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
            },     
        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabPageRoutingModule { }
