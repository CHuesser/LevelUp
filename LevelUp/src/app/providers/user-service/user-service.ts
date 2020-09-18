import {Injectable} from '@angular/core';
import {User} from '../../models/user';

const users: User[] = [
    {
        id: 0,
        name: 'Beck',
        diabotchiName: 'BamBamTheDumDum',
        level: 1,
        friendIds: [1, 2, 3],
        groupIds: [],
        challengeIds: [],
    },
    {
        id: 1,
        name: 'JB',
        diabotchiName: 'Cow',
        level: 10,
        friendIds: [2, 3],
        groupIds: [],
        challengeIds: [],
    },
    {
        id: 2,
        name: 'Dea',
        diabotchiName: 'Bubbles',
        level: 11,
        friendIds: [0, 1, 3],
        groupIds: [],
        challengeIds: [],
    },
    {
        id: 3,
        name: 'Captain',
        diabotchiName: 'Tobi',
        level: 13,
        friendIds: [0, 1, 2],
        groupIds: [],
        challengeIds: [],
    },
];

@Injectable()
export class UserServiceProvider {

    constructor() {
    }

    getAllUsers(): Promise<User[]> {
        return new Promise((resolve, reject) => resolve(users));
    }

    getUser(userId: number): Promise<User> {
        return new Promise((resolve, reject) => resolve(users.find(u => u.id === userId)));
    }

    getFriends(user: User): Promise<User[]> {
        const fwends = users.filter(u => user.friendIds.includes(u.id));

        return new Promise((resolve, reject) => resolve(fwends));
    }
}
