export class Tip {
    id: number;
    title: string;
    description: string;
    category: TipCategory[];
    image: string;
}

export enum TipCategory {
    health,
    environment,
    money,
}