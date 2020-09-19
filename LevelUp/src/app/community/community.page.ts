import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Group } from '../models/group';
import { User } from '../models/user';
import { GroupServiceProvider } from '../providers/group-service/group-service';
import { UserServiceProvider} from '../providers/user-service/user-service';
import { ModalController } from '@ionic/angular';
import {ModalPagePage} from '../modal-page/modal-page.page';
import { UserlistPage } from '../userlist/userlist.page';

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
            component: UserlistPage
        });

        userlistPage.onWillDismiss()
            .then((data) => {
                this.updateFriendList();
            });

        return await userlistPage.present();
    }
}