export class Challenge {
    id: number;
    title: string;
    description: string;
    image: string;
    type: ChallengeType;
    status: ChallengeStatus;
    category: ChallengeCategory;
    participants: number[];
}

export enum ChallengeType {
    daily,
    ego,
    duo,
    group,
}

export enum ChallengeStatus {
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
