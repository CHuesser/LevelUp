import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityGrouplistPageRoutingModule } from './community-grouplist-routing.module';

import { CommunityGrouplistPage } from './community-grouplist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityGrouplistPageRoutingModule
  ],
  declarations: [CommunityGrouplistPage]
})
export class CommunityGrouplistPageModule {}
