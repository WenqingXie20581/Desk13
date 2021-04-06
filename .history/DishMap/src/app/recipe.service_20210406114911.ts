import { Injectable } from '@angular/core';
import { Ingredient } from './models/Ingredient';
import { Recipe } from './models/Recipe';
import { RECIPES } from './data/recipe-data'
import { Nations } from './data/nation-data'
import { Observable, of } from 'rxjs';
import { NATIONS } from './data/nation-data';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(){
  }

  getNations() : Observable<String[]> {
    return of(NATIONS);
  }

  getRecipe() : Observable<Recipe[]> {
    return of(RECIPES);
  } 
}
