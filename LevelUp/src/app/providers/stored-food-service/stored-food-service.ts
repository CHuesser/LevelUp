import {StoredFood} from '../../models/StoredFood';
import {FoodItemDetails} from '../../models/FoodItemDetails';
import {Injectable} from '@angular/core';


@Injectable()
export class StoredFoodServiceProvider {
    storedFood: StoredFood[];

    constructor() {
        this.storedFood = [];
    }

    createStoredFood(name: string, nutrition: FoodItemDetails, type: number) {
        this.storedFood.push(new StoredFood(name, nutrition, type));
    }

    getStoredFoodPerType(type: number) {
        return this.storedFood.filter(item => item.type === type);
    }
}
