import {Injectable} from '@angular/core';
import {Tip, TipCategory} from '../../models/Tip';

@Injectable()
export class TipServiceProvider {

    constructor() {
    }
    getTips(): Promise<Tip[]> {
        return new Promise((resolve, reject) => resolve([
                {
                    id: 0,
                    title: 'Eat the Right Fats',
                    description: 'Avocado and nuts are good examples of healthy fats. Reduce your intake of unhealthy fats including saturated and trans fats such as fatty meats, cakes and pies.',
                    category: [TipCategory.health],
                    image: './assets/images/tipImages/eatRightFats.jpg',
                    likes: 187,
                    comments: 37
                },
                {
                    id: 1,
                    title: 'Reduce Salt Intake',
                    description: 'High salt intake can increase your blood pressure levels and put you at risk of heart disease. Limit your intake by avoiding processed result.',
                    category: [TipCategory.health],
                    image: './assets/images/tipImages/eatLessSalt.jpg',
                    likes: 217,
                    comments: 48
                },
                {
                    id: 2,
                    title: 'Increase Fruits and Vegetables',
                    description: 'Fruits and vegetables contain important antioxidants and phytochemicals that help protect your heart. Choose a variety of fruits and vegetables for your diet.',
                    category: [TipCategory.health],
                    image: './assets/images/tipImages/fruits_vegetables.jpg',
                    likes: 116,
                    comments: 31
                },
                {
                    id: 3,
                    title: 'Use Reusable Bags',
                    description: 'Plastic grocery-type bags that get thrown out end up in landfills or in other parts of the environment. These can suffocate animals who get stuck in them or may mistake them for food. Also, it takes a while for the bags to decompose.',
                    category: [TipCategory.sustainability],
                    image: './assets/images/tipImages/Reusable-shopping-bags.jpg',
                    likes: 146,
                    comments: 29
                },
                {
                    id: 4,
                    title: 'Save Electricity',
                    description: 'Use energy-efficient light bulbs instead of regular bulbs. They last longer, which will save you a bit of money',
                    category: [TipCategory.sustainability, TipCategory.wealth],
                    image: './assets/images/tipImages/sparlampe.jpg',
                    likes: 89,
                    comments: 11
                },
                {
                    id: 5,
                    title: 'Use a reusable Beverage Container',
                    description: 'A lot of coffee shops even offer a discount to customers who use a reusable container for their drinks. Starbucks, as an example, offers a small discount for customers who do this. Saving the environment and money? Win-win.',
                    category: [TipCategory.sustainability, TipCategory.wealth],
                    image: './assets/images/tipImages/ReusableBeverageContainer.jpg',
                    likes: 113,
                    comments: 27
                },
            ]
        ));
    }

}
