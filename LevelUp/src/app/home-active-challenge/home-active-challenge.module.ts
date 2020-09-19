import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeActiveChallengePageRoutingModule } from './home-active-challenge-routing.module';

import { HomeActiveChallengePage } from './home-active-challenge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeActiveChallengePageRoutingModule
  ],
  declarations: [HomeActiveChallengePage]
})
export class HomeActiveChallengePageModule {}
