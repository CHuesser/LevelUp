import { Component, OnInit } from '@angular/core';
import {Challenge} from '../models/challenge';
import {ChallengeServiceProvider} from '../providers/challenge-service/challenge-service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.page.html',
  styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {
  private challenges: Challenge[];

  ngOnInit() {
  }

  constructor( private challengeServiceProvider: ChallengeServiceProvider) {
    this.challengeServiceProvider.getChallenges().then((challenges => this.challenges = challenges));
   }


}
