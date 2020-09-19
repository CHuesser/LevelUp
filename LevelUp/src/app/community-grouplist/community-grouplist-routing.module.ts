import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityGrouplistPage } from './community-grouplist.page';

const routes: Routes = [
  {
    path: '',
    component: CommunityGrouplistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityGrouplistPageRoutingModule {}
