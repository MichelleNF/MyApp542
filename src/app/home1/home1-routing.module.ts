import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home1Page } from './home1.page';

const routes: Routes = [
  {
    path: '',
    component: Home1Page,
    children:[
      {
        path:'tab1',
        loadChildren:()=>import('../tab1/tab1.module').then(m=>m.Tab1PageModule)
      },
      {
        path:'tab2',
        loadChildren:()=>import('../tab2/tab2.module').then(m=>m.Tab2PageModule)
      },
      {
        path:'tab3',
        loadChildren:()=>import('../tab3/tab3.module').then(m=>m.Tab3PageModule)
      },
      {
        path:'tab4',
        loadChildren:()=>import('../tab4/tab4.module').then(m=>m.Tab4PageModule)
      },
      {
        path:'tab5',
        loadChildren:()=>import('../tab5/tab5.module').then(m=>m.Tab5PageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home1PageRoutingModule {}
