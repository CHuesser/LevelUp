class Challenge {
    id: number;
    title: string;
    description: string;
    type: ChallengeType;
    status: ChallengeStatus;
    participants: number[];
}

enum ChallengeType {
    daily,
    ego,
    duo,
    group,
}

enum ChallengeStatus {
    created,
    running,
    finished,
}
