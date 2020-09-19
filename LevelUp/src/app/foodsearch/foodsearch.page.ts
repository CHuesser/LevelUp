import {Component, OnInit} from '@angular/core';
import {FoodItem} from '../models/FoodItem';
import {FoodServiceService} from '../food-service.service';
import {ModalController} from '@ionic/angular';
import {FoodsearchresultPage} from '../foodsearchresult/foodsearchresult.page';
import {ActivatedRoute} from '@angular/router';
import {StoredFoodServiceProvider} from '../providers/stored-food-service/stored-food-service';


@Component({
    selector: 'app-foodsearch',
    templateUrl: './foodsearch.page.html',
    styleUrls: ['./foodsearch.page.scss'],
})
export class FoodsearchPage implements OnInit {
    type: number;

    constructor(public foodService: FoodServiceService, public modalCtrl: ModalController, private activatedRoute: ActivatedRoute,
                private storedFoodService: StoredFoodServiceProvider) {

    }

    fooditem: string;
    fooditems = [];

    ngOnInit() {
        this.type = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    }

    async openModal(foodItem: FoodItem) {
        let modalPage = await this.modalCtrl.create({
            component: FoodsearchresultPage,
            componentProps: {id: foodItem.id}
        });

        modalPage.onDidDismiss()
            .then((data) => {
                const FoodData =  data['data'];
                this.storedFoodService.createStoredFood(FoodData.name, FoodData, this.type);
            });

        return await modalPage.present();
    }

    getAllFood() {
        this.foodService.getAllFood(this.fooditem).then(response => {
            this.fooditems = response['results'].map(item => {
                console.log(item);
                return new FoodItem(item.id, item.name);
            });
        });
    }
}
