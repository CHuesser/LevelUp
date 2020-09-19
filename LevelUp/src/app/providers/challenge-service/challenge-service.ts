import {Injectable} from '@angular/core';
import {Challenge, ChallengeStatus, ChallengeType} from '../../models/Challenge';


@Injectable()
export class ChallengeServiceProvider {

    constructor() {
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
                    description: '',
                    image: './assets/images/steps-388914_640.jpg',
                    category: 0,
                    type: ChallengeType.none,
                    status: ChallengeStatus.none,
                    participants: []
                },
                {
                    id: 2,
                    title: 'Take the bike',
                    description: '',
                    image: './assets/images/bicycle-1209682_640.jpg',
                    type: ChallengeType.none,
                    status: ChallengeStatus.none,
                    category: 0,
                    participants: []
                },
                {
                    id: 3,
                    title: 'Make Yoga',
                    description: '',
                    image: './assets/images/yoga-pose-1082172_640.jpg',
                    type: ChallengeType.none,
                    status: ChallengeStatus.none,
                    category: 0,
                    participants: []
                },
                {
                    id: 4,
                    title: 'Eat more Fruit',
                    description: '',
                    image: './assets/images/apples-918953_640.jpg',
                    type: ChallengeType.none,
                    status: ChallengeStatus.none,
                    category: 0,
                    participants: []
                },
                {
                    id: 5,
                    title: 'Spend less Money',
                    description: '',
                    image: './assets/images/money-2180330_640.jpg',
                    type: ChallengeType.none,
                    status: ChallengeStatus.none,
                    category: 2,
                    participants: []
                },
                {
                    id: 6,
                    title: 'Take the train',
                    description: '',
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
