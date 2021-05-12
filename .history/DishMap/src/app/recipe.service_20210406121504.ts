import { Injectable } from '@angular/core';
import { Ingredient } from './models/Ingredient';
import { Recipe } from './models/Recipe';
import { RECIPES } from './data/recipe-data'
import { NATIONS } from './data/nation-data'
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(){
  }

  getNation() : Observable<String[]> {
    return of(NATIONS);
  }

  getRecipe() : Observable<Recipe[]> {
    return of(RECIPES);
  } 
}
