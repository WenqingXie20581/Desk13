import { Injectable } from '@angular/core';
import { Ingredient } from './models/Ingredient';
import { Recipe } from './models/Recipe';
import { RECIPES } from './data/recipe-data'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes : Recipe[] = RECIPES;

  constructor(){
  }

  getRecipe() : Observable<Recipe[]> {
    return of(RECIPES);
  } 
}
