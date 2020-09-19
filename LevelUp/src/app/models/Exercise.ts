export class Exercise {
    id: number;
    type: ExerciseType;
    duration: number;
    calories: number;
}

export enum ExerciseType {
    Walking,
    Jogging,
    Biking,
    Strength,
    HIIT,
}
