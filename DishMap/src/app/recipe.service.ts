import { Injectable } from '@angular/core';
// import { RECIPES } from './data/recipe-data'
import { Recipe } from './models/Recipe';
import { Feedback} from './models/Feedback'
import { NATIONS } from './data/nation-data'
import { from, Observable, of } from 'rxjs';
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

   uploadRecipe(formdata: FormData) {
    return this.http.post<FormData>(`${this.recipeUrl}/upload`, formdata)
   }

   addFeedback(feedback: Feedback) {
    return this.http.post<Feedback>(`${this.recipeUrl}/feedback`, feedback)
   }

   addFavour(recipe: Recipe) {
      return this.http.post<Recipe>(`${this.recipeUrl}/favour`, recipe);
   }

   addComplete(recipe: Recipe){
    return this.http.post<Recipe>(`${this.recipeUrl}/complete`, recipe);
   }

  getRecipes() : Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }


  getRecipeById(id: string): Observable<Recipe> {
    const url = `${this.recipeUrl}/${id}`;
    return this.http.get<Recipe>(url);
  }

  // getTopRecipes(): Observable<Recipe[]>{
  //     const url = `${this.recipeUrl}/top`;
  //   return this.http.get<Recipe[]>(url);
  // }

    // getTopRecipes(): Observable<Recipe[]>{
  //   const lengthOfTopRecipes = RECIPES.length >= 10 ? 10 : RECIPES.length;
  //   return of(RECIPES.sort((a, b) => { return b.popularity - a.popularity}).slice(0,10));
  // }


}
