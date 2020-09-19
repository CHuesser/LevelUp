import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {HomeTrackfoodPage} from '../home-trackfood/home-trackfood.page';
import {HomeTrackexercisePage} from '../home-trackexercise/home-trackexercise.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'home-trackexercise',
    component: HomeTrackexercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
