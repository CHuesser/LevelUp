export class Challenge {
    id: number;
    title: string;
    description: string;
    image: string;
    type: ChallengeType;
    status: ChallengeStatus;
    participants: number[];
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
