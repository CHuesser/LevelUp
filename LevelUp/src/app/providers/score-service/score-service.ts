import {Injectable} from '@angular/core';
import {Score} from '../../models/Score';

@Injectable()
export class ScoreServiceProvider {
    activeScores: Score[];

    createScore(userId: number, challengeId: number) {
        this.activeScores.push( new Score(userId, challengeId));
    }

    getActiveScoresForUser(userId: number): Score[] {
        return this.activeScores.filter(score => score.userId === userId);

    }

    getActiveScoresForChallenges(challengeId: number): Score[] {
        return this.activeScores.filter(score => score.challengeId === challengeId);

    }
}
