import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodsearchresultPage } from './foodsearchresult.page';
import {FoodsearchPage} from '../foodsearch/foodsearch.page';

const routes: Routes = [
  {
    path: '',
    component: FoodsearchresultPage
  },
  {
    path: 'foodsearch',
    component: FoodsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodsearchresultPageRoutingModule {}
