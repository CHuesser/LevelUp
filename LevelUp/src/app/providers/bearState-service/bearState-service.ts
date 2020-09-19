import {Injectable} from '@angular/core';
import {Challenge, ChallengeStatus, ChallengeType} from '../../models/Challenge';
import {BearState} from '../../models/BearState';


@Injectable()
export class BearStateServiceProvider {

    constructor() {
    }

    getBearStates(): Promise<BearState[]> {
        return new Promise((resolve, reject) => resolve([
                {
                    state: 0,
                    text: 'I am super happy at the moment, keep on going this way!',
                    dataPath: './assets/images/Happy_Beary.png',
                },
                {
                    state: 1,
                    text: 'I have not gotten enough sleep in the last few nights. An average of 7 - 8 hours sleep per day is ideal.',
                    dataPath: './assets/images/Tired_Beary.png',
                },
                {
                    state: 2,
                    text: 'My diet has not been balanced enough lately. I should eat more fresh and healthy products.',
                    dataPath: './assets/images/Chubby_Beary.png',
                },
                {
                    state: 3,
                    text: 'The movement is very beneficial for my health and I can really feel the endorphins. Keep it up!',
                    dataPath: './assets/images/Sporty_Beary.png',
                },
                {
                    state: 4,
                    text: 'Sustainable Bear',
                    dataPath: './assets/images/Sust_Beary.png',
                },
                {
                    state: 5,
                    text: 'Anti-sustainable Bear',
                    dataPath: './assets/images/AntiSust_Beary.png',
                }]
        ));
    }

}
