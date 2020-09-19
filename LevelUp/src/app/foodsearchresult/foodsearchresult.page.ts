import {Component, OnInit} from '@angular/core';
import {FoodServiceService} from '../food-service.service';
import {FoodItemDetails} from '../models/FoodItemDetails';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-foodsearchresult',
    templateUrl: './foodsearchresult.page.html',
    styleUrls: ['./foodsearchresult.page.scss'],
})
export class FoodsearchresultPage implements OnInit {

    constructor(public modalController: ModalController, public navParams: NavParams, public foodService: FoodServiceService) {
    }

    foodId: string;
    fooddetails: FoodItemDetails;

    ngOnInit() {
        this.foodId = this.navParams.get('id');
        this.getDetails(this.foodId);
    }

    getDetails(itemId: string) {
        this.foodService.getFoodDetails(itemId).then(response => {
            const item = response['nutrition_facts'][0];
            this.fooddetails = new FoodItemDetails(itemId, response['name'], item.nutrition.calories,
                item.nutrition.total_fat, item.nutrition.protein,
                item.nutrition.total_carb, item.nutrition.sugars,
                item.serving.grams);
        });
    }

    closeModal() {
        this.modalController.dismiss();
    }

    addFoodItem(fooddetails: FoodItemDetails): void {
        this.modalController.dismiss(fooddetails);
    }
}
