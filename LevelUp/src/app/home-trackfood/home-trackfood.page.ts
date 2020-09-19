import { Component, OnInit } from '@angular/core';
import {StoredFoodServiceProvider} from '../providers/stored-food-service/stored-food-service';
import {StoredFood} from '../models/StoredFood';

@Component({
  selector: 'app-home-trackfood',
  templateUrl: './home-trackfood.page.html',
  styleUrls: ['./home-trackfood.page.scss'],
})
export class HomeTrackfoodPage implements OnInit {
  foodItems0: StoredFood[];
  foodItems1: StoredFood[];
  foodItems2: StoredFood[];
  foodItems3: StoredFood[];

  constructor(private storedFoodService: StoredFoodServiceProvider) {
    this.foodItems0 = this.storedFoodService.getStoredFoodPerType(0);
    this.foodItems1 = this.storedFoodService.getStoredFoodPerType(1);
    this.foodItems2 = this.storedFoodService.getStoredFoodPerType(2);
    this.foodItems3 = this.storedFoodService.getStoredFoodPerType(3);
  }

  ngOnInit() {
    this.foodItems0 = this.storedFoodService.getStoredFoodPerType(0);
    this.foodItems1 = this.storedFoodService.getStoredFoodPerType(1);
    this.foodItems2 = this.storedFoodService.getStoredFoodPerType(2);
    this.foodItems3 = this.storedFoodService.getStoredFoodPerType(3);
  }

}
