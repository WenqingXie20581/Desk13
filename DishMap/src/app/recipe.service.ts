import { Injectable } from '@angular/core';

import { Recipe } from './models/Recipe';
import { NATIONS } from './data/nation-data'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipeUrl = 'api/recipe';

  constructor(
    private http: HttpClient){
  }

  getNations() : Observable<string[]> {
    return of(NATIONS);
  }

  getRecipes() : Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  } 

  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipeUrl}/${id}`;
    return this.http.get<Recipe>(url);
  }

}
