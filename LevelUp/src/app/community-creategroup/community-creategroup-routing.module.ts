import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityCreategroupPage } from './community-creategroup.page';

const routes: Routes = [
  {
    path: '',
    component: CommunityCreategroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityCreategroupPageRoutingModule {}
