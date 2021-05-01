import { Injectable } from '@angular/core';
import { RECIPES } from './data/recipe-data'
import { Recipe } from './models/Recipe';
import { UploadRecipe } from './models/UploadRecipe'
import { Feedback} from './models/Feedback'
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
     private http: HttpClient
    ){
  }

  getNations() : Observable<string[]> {
    return of(NATIONS);
  }

  getRecipes() : Observable<Recipe[]> {
    return of(RECIPES);
  }

  // getRecipeById(id: number): Observable<Recipe> {
  //    return of(RECIPES.find(recipe => recipe.id === id));
  // }

  getTopRecipes(): Observable<Recipe[]>{
    const lengthOfTopRecipes = RECIPES.length >= 10 ? 10 : RECIPES.length;
    return of(RECIPES.sort((a, b) => { return b.popularity - a.popularity}).slice(0,10));
  }


   uploadRecipe(recipe: UploadRecipe) {
    return this.http.post<UploadRecipe>(`${this.recipeUrl}/upload`, recipe)
   }

  //  deleteRecipe(id: id) {
  //  return this.http.delete<UploadRecipe>(`${this.recipeUrl}/delete`, id)
  // }


   addFeedback(feedback: Feedback) {
    return this.http.post<Feedback>(`${this.recipeUrl}/feedback`, feedback)
   }

   addFavour(recipe: Recipe) {
      return this.http.post<Recipe>(`${this.recipeUrl}/favour`, recipe);
   }

  //  getNations() : Observable<string[]> {
  //   return this.http.get<string[]>(`${this.recipeUrl}/nations`);
  // }

  // getRecipes() : Observable<Recipe[]> {
  //   return this.http.get<Recipe[]>(this.recipeUrl);
  // }

  getRecipeById(id: number): Observable<Recipe> {
    const url = `${this.recipeUrl}/${id}`;
    return this.http.get<Recipe>(url);
  }

  // getTopRecipes(): Observable<Recipe[]>{
  //     const url = `${this.recipeUrl}/top`;
  //   return this.http.get<Recipe[]>(url);
  // }


}
