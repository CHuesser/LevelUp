import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Group } from '../models/group';
import { User } from '../models/user';
import { GroupServiceProvider } from '../providers/group-service/group-service';
import { UserServiceProvider} from '../providers/user-service/user-service';
import { ModalController } from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { CommunityUserlistPage } from '../community-userlist/community-userlist.page';
import { CommunityGrouplistPage } from '../community-grouplist/community-grouplist.page';

@Component({
    selector: 'app-community',
    templateUrl: './community.page.html',
    styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {
    private me: User;
    private friends: User[];
    private groups: Group[];

    ngOnInit() { }

    ionViewWillEnter() {
        this.updateFriendList();
        this.updateGroupList();
    }

    constructor( private userServiceProvider: UserServiceProvider, private groupServiceProvider: GroupServiceProvider, public modalCtrl: ModalController) {
        this.userServiceProvider.getUser(0)
            .then(me => this.me = me)
            .then(_ => this.updateFriendList())
            .then(_ => this.updateGroupList());
    }

    removeFriend(userId) {
        let index = this.me.friendIds.indexOf(userId);
        this.me.friendIds.splice(index, 1);
        this.updateFriendList();
    }

    leaveGroup(groupId) {
        let g = this.groups.find(g => g.id === groupId);
        let index = g.userIds.indexOf(this.me.id);
        g.userIds.splice(index,1);
        this.updateGroupList();
    }

    updateFriendList() {
        this.userServiceProvider.getFriends(this.me)
            .then(users => this.friends = users);
    }

    updateGroupList() {
        this.groupServiceProvider.getGroupsToUser(this.me)
            .then(groups => this.groups = groups);
    }

    async openUserlist() {
        let userlistPage = await this.modalCtrl.create({
            component: CommunityUserlistPage
        });

        userlistPage.onWillDismiss()
            .then((data) => {
                this.updateFriendList();
            });

        return await userlistPage.present();
    }

    async openGrouplist() {
        let grouplistPage = await this.modalCtrl.create({
            component: CommunityGrouplistPage
        });

        grouplistPage.onWillDismiss()
            .then((data) => {
                this.updateGroupList();
            });

        return await grouplistPage.present();
    }
}