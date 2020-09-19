import {Injectable} from '@angular/core';
import {Challenge, ChallengeStatus, ChallengeType} from '../../models/challenge';


@Injectable()
export class ChallengeServiceProvider {
    activeChallenges: Challenge[];

    constructor() {
        this.activeChallenges = [];
    }

    storeChallenge(challenge: Challenge) {
        this.activeChallenges.push(challenge);
    }

    getActiveChallenge(userID: number): Challenge[] {
        return this.activeChallenges.filter(challenge => challenge.participants.indexOf(userID) !== -1);

    }


    getChallenges(): Promise<Challenge[]> {
        return new Promise((resolve, reject) => resolve([
                {
                    id: 0,
                    title: 'Walk 10000 Steps',
                    description: 'Daily challenge to walk 10000 steps.',
                    image: './assets/images/walk-2635038_640.jpg',
                    type: ChallengeType.none,
                    status: ChallengeStatus.none,
                    category: 0,
                    participants: []
                },
                {
                    id: 1,
                    title: 'Take stairs',
                    description: 'Challenge to take more stairs.',
                    image: './assets/images/steps-388914_640.jpg',
                    category: 0,
                    type: ChallengeType.none,
                    status: ChallengeStatus.none,
                    participants: []
                },
                {
                    id: 2,
                    title: 'Take the bike',
                    description: 'Challenge to take the bike.',
                    image: './assets/images/bicycle-1209682_640.jpg',
                    type: ChallengeType.none,
                    status: ChallengeStatus.none,
                    category: 0,
                    participants: []
                },
                {
                    id: 3,
                    title: 'Make Yoga',
                    description: 'Challenge to make more yoga.',
                    image: './assets/images/yoga-pose-1082172_640.jpg',
                    type: ChallengeType.none,
                    status: ChallengeStatus.none,
                    category: 0,
                    participants: []
                },
                {
                    id: 4,
                    title: 'Eat more Fruit',
                    description: 'Challenge to eat more fruits.',
                    image: './assets/images/apples-918953_640.jpg',
                    type: ChallengeType.none,
                    status: ChallengeStatus.none,
                    category: 0,
                    participants: []
                },
                {
                    id: 5,
                    title: 'Spend less Money',
                    description: 'Challenge to spend less money',
                    image: './assets/images/money-2180330_640.jpg',
                    type: ChallengeType.none,
                    status: ChallengeStatus.none,
                    category: 2,
                    participants: []
                },
                {
                    id: 6,
                    title: 'Take the train',
                    description: 'Challenge to take the train instead of the car.',
                    image: './assets/images/railway-62849_640.jpg',
                    type: ChallengeType.none,
                    status: ChallengeStatus.none,
                    category: 1,
                    participants: []
                }
            ]
        ));
    }

}
