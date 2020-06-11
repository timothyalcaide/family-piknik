import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineUpPage } from './line-up.page';

const routes: Routes = [
  {
    path: '',
    component: LineUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineUpPageRoutingModule {}
