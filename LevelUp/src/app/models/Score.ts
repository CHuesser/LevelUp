export class Score {
    userId: number;
    challengeId: number;
    score: number;
    constructor(userId:number, challengeId:number) {
        this.userId = userId;
        this.challengeId = challengeId;
        this.score = 0;
    }
}
