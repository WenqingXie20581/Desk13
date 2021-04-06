import { Injectable } from '@angular/core';
import { Recipe } from './models/Recipe';
import { Ingredient } from './models/Ingredient'
import { RECIPES } from './data/recipe-data'
import { NATIONS } from './data/nation-data'
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(){
  }

  getNations() : Observable<String[]> {
    return of(NATIONS);
  }

  getRecipes() : Observable<Recipe[]> {
    return of(RECIPES);
  } 

  getRecipe(id: Number): Observable<Recipe> {
    return of(RECIPES.find(recipe => recipe.id === id));
  }
}
