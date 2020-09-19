import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTrackfoodPage } from './home-trackfood.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTrackfoodPage
  },
  {
    path: 'home',
    component: HomePage
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})



export class HomeTrackfoodPageRoutingModule {}
