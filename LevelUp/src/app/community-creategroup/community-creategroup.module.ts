import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityCreategroupPageRoutingModule } from './community-creategroup-routing.module';

import { CommunityCreategroupPage } from './community-creategroup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityCreategroupPageRoutingModule
  ],
  declarations: [CommunityCreategroupPage]
})
export class CommunityCreategroupPageModule {}
