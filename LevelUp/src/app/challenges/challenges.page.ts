import {Component, OnInit} from '@angular/core';
import {Challenge} from '../models/Challenge';
import {ChallengeServiceProvider} from '../providers/challenge-service/challenge-service';

@Component({
    selector: 'app-challenges',
    templateUrl: './challenges.page.html',
    styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {
    private challenges: Challenge[];
    private filterargs: number[];

    ngOnInit() {
    }

    constructor(private challengeServiceProvider: ChallengeServiceProvider) {
        this.challengeServiceProvider.getChallenges().then((challenges => this.challenges = challenges));
        this.filterargs = [0, 1, ];
    }

    removeAddFilter(filter: number) {
        const index = this.filterargs.indexOf(filter);
        if (index !== -1) {
            this.filterargs.splice(index, 1);

        } else {
            this.filterargs.push(filter);
        }

    }


}
