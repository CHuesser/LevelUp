export class FoodItemDetails {
    id: string;
    name: string;
    calories: number;
    fat: number;
    protein: number;
    carbs: number;
    sugar: number;
    servingSize: number;


    constructor(id: string, name: string, cal: number, fat: number, protein: number,
                carbs: number, sugar: number, sS: number){
        this.id = id;
        this.name = name;
        this.calories = cal;
        this.fat = fat;
        this.protein = protein;
        this.carbs = carbs;
        this.sugar = sugar;
        this.servingSize = sS;
    }
}
