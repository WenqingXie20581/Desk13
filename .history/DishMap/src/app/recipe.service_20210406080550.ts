import { Injectable } from '@angular/core';
import { Ingredient } from './models/Ingredient';
import { Recipe } from './models/Recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipe : Recipe;

  constructor(){
    let title =  'burger';
    let ingredient = new Ingredient('beef','1 kg','null')
    let ingredients = [ingredient,ingredient];
    let directions = ['fry' ,'done'];
    this.recipe = new Recipe(title,ingredients,directions);
  }

  getRecipe() {
    return this.recipe;
  } 
}
