import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Group } from '../models/group';
import { User } from '../models/user';
import { GroupServiceProvider } from '../providers/group-service/group-service';
import { UserServiceProvider} from '../providers/user-service/user-service';

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

    constructor( private userServiceProvider: UserServiceProvider, private groupServiceProvider: GroupServiceProvider) {
        this.userServiceProvider.getUser(0)
            .then(me => this.me = me)
            .then(_ => this.userServiceProvider.getFriends(this.me)
                .then(users => this.friends = users))
            .then(_ => this.groupServiceProvider.getGroupsToUser(this.me)
                .then(groups => this.groups = groups));
    }  
}
