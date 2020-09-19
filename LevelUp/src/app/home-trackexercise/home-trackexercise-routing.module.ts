import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTrackexercisePage } from './home-trackexercise.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTrackexercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTrackexercisePageRoutingModule {}
