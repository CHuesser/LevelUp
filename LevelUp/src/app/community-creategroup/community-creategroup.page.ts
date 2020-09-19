import { Component, OnInit } from '@angular/core';
import { Group } from '../models/group';
import { GroupServiceProvider } from '../providers/group-service/group-service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-community-creategroup',
  templateUrl: './community-creategroup.page.html',
  styleUrls: ['./community-creategroup.page.scss'],
})
export class CommunityCreategroupPage implements OnInit {
  private groupName: string;
  private groupDesc: string;

  constructor(public modalCtrl: ModalController, private groupServiceProvider: GroupServiceProvider) { }

  ngOnInit() {
  }

  createGroup() {
    let g: Group = {
      id: 0,
      name: this.groupName,
      userIds: [],
      challengeIds: [],
      description: this.groupDesc
    };
    this.groupServiceProvider.addGroup(g);
    this.closeCreategroup();
  }

  closeCreategroup() {
    this.modalCtrl.dismiss();
  }
}
