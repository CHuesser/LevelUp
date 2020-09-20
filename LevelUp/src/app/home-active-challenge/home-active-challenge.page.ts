import {Component, OnInit} from '@angular/core';
import {ChallengeServiceProvider} from '../providers/challenge-service/challenge-service';
import {Challenge} from '../models/Challenge';

@Component({
    selector: 'app-home-active-challenge',
    templateUrl: './home-active-challenge.page.html',
    styleUrls: ['./home-active-challenge.page.scss'],
})
export class HomeActiveChallengePage implements OnInit {

    activeChallenges: Challenge[];
    activeChallenge: Challenge[];

    constructor(private challengeServiceProvider: ChallengeServiceProvider) {
        console.log("create");
        this.challengeServiceProvider.getActiveChallenges().then((challenges => {
            this.activeChallenges = challenges;
        }));
    }

    ngOnInit() {
        console.log("init");
        this.activeChallenge = this.challengeServiceProvider.getActiveChallenge(0);
    }

}
