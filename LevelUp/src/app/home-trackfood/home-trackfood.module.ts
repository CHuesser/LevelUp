import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTrackfoodPageRoutingModule } from './home-trackfood-routing.module';

import { HomeTrackfoodPage } from './home-trackfood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTrackfoodPageRoutingModule
  ],
  declarations: [HomeTrackfoodPage]
})
export class HomeTrackfoodPageModule {}
