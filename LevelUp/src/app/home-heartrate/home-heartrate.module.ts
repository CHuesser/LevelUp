import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeHeartratePageRoutingModule } from './home-heartrate-routing.module';

import { HomeHeartratePage } from './home-heartrate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeHeartratePageRoutingModule
  ],
  declarations: [HomeHeartratePage]
})
export class HomeHeartratePageModule {}
