import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { Group } from '../models/group';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { GroupServiceProvider } from '../providers/group-service/group-service';
import { ModalController } from '@ionic/angular';
import { CommunityCreategroupPage } from '../community-creategroup/community-creategroup.page';

@Component({
  selector: 'app-community-grouplist',
  templateUrl: './community-grouplist.page.html',
  styleUrls: ['./community-grouplist.page.scss'],
})
export class CommunityGrouplistPage implements OnInit {
  private me: User;
  private nonJoinedGroups: Group[];

  constructor(private activatedRoute: ActivatedRoute, private userServiceProvider: UserServiceProvider, private groupServiceProvider: GroupServiceProvider, public modalCtrl: ModalController) { }

  ngOnInit() {
    let meid = +this.activatedRoute.snapshot.paramMap.get('meid');
    this.userServiceProvider.getUser(meid).then(me => {
      this.me = me;
      this.updateGroups();
    });
  }

  updateGroups() {
    this.groupServiceProvider.getAllGroups().then(groups => {
      this.nonJoinedGroups = groups.filter(g => !g.userIds.includes(this.me.id))
    })
  }

  closeGrouplist() {
    this.modalCtrl.dismiss();
  }

  joinGroup(groupId: number) {
    this.groupServiceProvider.getGroup(groupId).then(g => g.userIds.push(this.me.id));
    this.updateGroups();
  }

  async openCreateGroup() {
    let creategroupPage = await this.modalCtrl.create({
        component: CommunityCreategroupPage
    });

    creategroupPage.onWillDismiss()
        .then((data) => {
            this.updateGroups();
        });

    return await creategroupPage.present();
}

}
