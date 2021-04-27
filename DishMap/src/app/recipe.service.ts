import { Injectable } from '@angular/core';
import { RECIPES } from './data/recipe-data'
import { Recipe } from './models/Recipe';
import { NATIONS } from './data/nation-data'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { number } from 'echarts';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipeUrl = 'api/recipe';

  constructor(
    // private http: HttpClient
    ){
  }

  getNations() : Observable<string[]> {
    return of(NATIONS);
  }

  getRecipes() : Observable<Recipe[]> {
    return of(RECIPES);
  } 

  getRecipeById(id: number): Observable<Recipe> {
     return of(RECIPES.find(recipe => recipe.id === id));
  }

  getTopRecipes(): Observable<Recipe[]>{
    const lengthOfTopRecipes = RECIPES.length >= 10 ? 10 : RECIPES.length;
    return of(RECIPES.sort((a, b) => { return a.popularity - b.popularity}).slice(0,10));
  }

  // getRecipesByNation(nation: string): Observable<Recipe[]> {
  //   return of(RECIPES.filter(
  //     (recipe)=>{
  //       if (recipe.nationality === nation) return true;
  //     return false}));
  //   }
  // getRecipes() : Observable<Recipe[]> {
  //   return this.http.get<Recipe[]>(this.recipeUrl);
  // } 

  // getRecipe(id: number): Observable<Recipe> {
  //   const url = `${this.recipeUrl}/${id}`;
  //   return this.http.get<Recipe>(url);
  // }

}
