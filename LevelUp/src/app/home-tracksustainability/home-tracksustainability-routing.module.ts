import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTracksustainabilityPage } from './home-tracksustainability.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTracksustainabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTracksustainabilityPageRoutingModule {}
