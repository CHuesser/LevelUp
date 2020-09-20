import {StoredFood} from '../../models/StoredFood';
import {FoodItemDetails} from '../../models/FoodItemDetails';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';


@Injectable()
export class StoredFoodServiceProvider {
    storedFood: StoredFood[];

    constructor(private storage: Storage) {
        this.storedFood = [];
    }

    createStoredFood(name: string, nutrition: FoodItemDetails, type: number) {
        this.storedFood.push(new StoredFood(name, nutrition, type));
        this.storage.set('storedFood', JSON.stringify(this.storedFood));
    }

    getStoredFoodPerType(type: number) {
        return this.storedFood.filter(item => item.type === type);
    }
}
