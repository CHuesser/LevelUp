import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityUserlistPageRoutingModule } from './community-userlist-routing.module';

import { CommunityUserlistPage } from './community-userlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityUserlistPageRoutingModule
  ],
  declarations: [CommunityUserlistPage]
})
export class CommunityUserlistPageModule {}
