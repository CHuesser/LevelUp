import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTrackexercisePageRoutingModule } from './home-trackexercise-routing.module';

import { HomeTrackexercisePage } from './home-trackexercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTrackexercisePageRoutingModule
  ],
  declarations: [HomeTrackexercisePage]
})
export class HomeTrackexercisePageModule {}
