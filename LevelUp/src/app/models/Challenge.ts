export class Challenge {
    id: number;
    title: string;
    description: string;
    image: string;
    type: ChallengeType;
    status: ChallengeStatus;
    category: ChallengeCategory;
    participants: number[];
    //carbonfootprintSaved: number;
}

export enum ChallengeType {
    none,
    daily,
    ego,
    duo,
    group,
}

export enum ChallengeStatus {
    none,
    created,
    running,
    finished,
}

export enum ChallengeCategory {
    health,
    sustainability,
    money,
    various
}
