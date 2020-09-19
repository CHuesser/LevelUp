import { Component, OnInit } from '@angular/core';
import {FoodServiceService} from '../food-service.service';

@Component({
  selector: 'app-home-trackfood',
  templateUrl: './home-trackfood.page.html',
  styleUrls: ['./home-trackfood.page.scss'],
})
export class HomeTrackfoodPage implements OnInit {

  fooditem: string;
  constructor(public foodService: FoodServiceService) { }

  ngOnInit() {

  }

  getAllFood(){
    this.foodService.getAllFood(this.fooditem);
  }

}
