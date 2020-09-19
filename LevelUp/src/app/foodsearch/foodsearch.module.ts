import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodsearchPageRoutingModule } from './foodsearch-routing.module';

import { FoodsearchPage } from './foodsearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodsearchPageRoutingModule
  ],
  declarations: [FoodsearchPage]
})
export class FoodsearchPageModule {}
