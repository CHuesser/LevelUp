import { Component, OnInit } from '@angular/core';
import {Challenge} from '../models/challenge';

import {ChallengeServiceProvider} from '../providers/challenge-service/challenge-service';

@Component({
    selector: 'app-challenges',
    templateUrl: './challenges.page.html',
    styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {
    private filteredChallenges: Challenge[];
    private challenges: Challenge[];
    private filterargs: number[];

    ngOnInit() {
    }

    constructor(private challengeServiceProvider: ChallengeServiceProvider) {
        this.challengeServiceProvider.getChallenges().then((challenges => {
            this.challenges = challenges;
            this.filteredChallenges = challenges;
        }));
        this.filterargs = [0, 1, 2, 3];
    }

    removeAddFilter(filter: number) {
        const index = this.filterargs.indexOf(filter);

        if (index !== -1) {
            this.filterargs.splice(index, 1);

            document.getElementById('filter_' + filter).setAttribute('color', 'medium');
        } else {
            this.filterargs.push(filter);
            document.getElementById('filter_' + filter).removeAttribute('color');

        }
        this.filteredChallenges = this.challenges.filter(item => this.filterargs.indexOf(item.category) !== -1);

    }


}
