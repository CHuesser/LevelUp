import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTracksustainabilityPageRoutingModule } from './home-tracksustainability-routing.module';

import { HomeTracksustainabilityPage } from './home-tracksustainability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTracksustainabilityPageRoutingModule
  ],
  declarations: [HomeTracksustainabilityPage]
})
export class HomeTracksustainabilityPageModule {}
