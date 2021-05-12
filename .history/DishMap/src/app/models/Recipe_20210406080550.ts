import { Ingredient } from './Ingredient';

export class Recipe {
    title : string;
    ingredients : Ingredient[];
    directions : string[];

    constructor(title:string,ingredients:Ingredient[],directions:string[]){
        this.title = title;
        this.ingredients = ingredients;
        this.directions = directions;
    }

}