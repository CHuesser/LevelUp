import { Injectable } from '@angular/core';
import {Challenge, ChallengeStatus} from '../../models/Challenge';

@Injectable()
export class ChallengeServiceProvider {

    constructor() {
    }
    getChallenges(): Promise<Challenge[]> {
        return new Promise((resolve, reject) => resolve([
                {
                    id: 1,
                    title: 'Take stairs',
                    description: 'Take the stairs instead of lifts. It is way more healthy and good for your body. Challenge your friends for the battle of stairs!',
                    image: './assets/images/steps-388914_640.jpg',
                    type: 0,
                    status: 0,
                    participants: []
                },
                {
                    id: 2,
                    title: 'Take the bike',
                    description: 'Take the stairs instead of lifts. It is way more healthy and good for your body. Challenge your friends for the battle of stairs!',
                    image: './assets/images/bicycle-1209682_640.jpg',
                    type: 0,
                    status: 0,
                    participants: []
                },
                {
                    id: 3,
                    title: 'Make Yoga',
                    description: 'Take the stairs instead of lifts. It is way more healthy and good for your body. Challenge your friends for the battle of stairs!',
                    image: './assets/images/yoga-pose-1082172_640.jpg',
                    type: 0,
                    status: 0,
                    participants: []
                }
            ]
        ));
    }

}
