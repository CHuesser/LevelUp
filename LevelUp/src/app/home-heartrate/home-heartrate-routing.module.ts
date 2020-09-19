import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeHeartratePage } from './home-heartrate.page';

const routes: Routes = [
  {
    path: '',
    component: HomeHeartratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeHeartratePageRoutingModule {}
