import {FoodItemDetails} from './FoodItemDetails';
import {ChallengeType} from './Challenge';


export class StoredFood {
    name: string;
    nutrition: FoodItemDetails;
    type: FoodTypeEnum;

    constructor(name: string, foodItemDetails: FoodItemDetails, type: number){
        this.name = name;
        this.nutrition = foodItemDetails;
        this.type = type;
    }
}

export enum FoodTypeEnum{
    Breakfast,
    Lunch,
    Dinner,
    Snack
}
