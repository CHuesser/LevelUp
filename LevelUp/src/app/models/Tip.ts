export class Tip {
    id: number;
    title: string;
    description: string;
    category: TipCategory[];
    image: string;
    likes: number;
    comments: number;
}

export enum TipCategory {
    health,
    sustainability,
    wealth,
    other,
}
