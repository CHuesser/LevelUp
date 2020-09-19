import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSleepanalysisPage } from './home-sleepanalysis.page';

const routes: Routes = [
  {
    path: '',
    component: HomeSleepanalysisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeSleepanalysisPageRoutingModule {}
