import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodsearchresultPageRoutingModule } from './foodsearchresult-routing.module';

import { FoodsearchresultPage } from './foodsearchresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodsearchresultPageRoutingModule
  ],
  declarations: [FoodsearchresultPage]
})
export class FoodsearchresultPageModule {}
