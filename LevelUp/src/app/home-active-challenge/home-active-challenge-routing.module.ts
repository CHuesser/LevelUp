import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeActiveChallengePage } from './home-active-challenge.page';

const routes: Routes = [
  {
    path: '',
    component: HomeActiveChallengePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeActiveChallengePageRoutingModule {}
