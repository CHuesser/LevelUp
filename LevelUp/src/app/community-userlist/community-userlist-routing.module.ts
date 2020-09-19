import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityUserlistPage } from './community-userlist.page';

const routes: Routes = [
  {
    path: '',
    component: CommunityUserlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityUserlistPageRoutingModule {}
