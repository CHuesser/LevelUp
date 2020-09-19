import { Injectable } from '@angular/core';
import { Group } from '../../models/group';
import { User } from '../../models/user';

const groups: Group[] = [
    {
        id: 0,
        name: '5.2C19',
        userIds: [0, 2, 3],
        challengeIds: [],
        description: 'Beste Büro LE'
    },
    {
        id: 1,
        name: 'Cow Puncher',
        userIds: [0, 1],
        challengeIds: [],
        description: 'self-explanatory '
    }
];

@Injectable()
export class GroupServiceProvider {

    constructor() {
    }

    getAllGroups(): Promise<Group[]> {
        return new Promise((resolve, reject) => resolve(groups));
    }

    getGroup(groupId: number): Promise<Group> {
        return new Promise((resolve, reject) => resolve(groups.find(g => g.id === groupId)));
    }

    getGroupsToUser(user: User): Promise<Group[]> {
        const gs = groups.filter(g => g.userIds.includes(user.id));
        return new Promise((resolve, reject) => resolve(gs));
    }
}
