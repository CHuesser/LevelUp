import { Component, OnInit } from '@angular/core';
import {FoodItem} from '../models/FoodItem';
import {FoodServiceService} from '../food-service.service';

@Component({
  selector: 'app-foodsearch',
  templateUrl: './foodsearch.page.html',
  styleUrls: ['./foodsearch.page.scss'],
})
export class FoodsearchPage implements OnInit {

  constructor(public foodService: FoodServiceService) { }
  fooditem: string;
  fooditems = []

  ngOnInit() {
  }

  getAllFood(){
    this.foodService.getAllFood(this.fooditem).then(response => {
      this.fooditems = response['results'].map(item =>  {
        console.log(item);
        return new FoodItem(item.id, item.name); });
    });
  }
}
