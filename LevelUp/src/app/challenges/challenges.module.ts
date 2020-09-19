import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengesPageRoutingModule } from './challenges-routing.module';

import { ChallengesPage } from './challenges.page';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengesPageRoutingModule,
      HttpClientModule
  ],
  declarations: [ChallengesPage]
})
export class ChallengesPageModule {}
