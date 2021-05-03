import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccomplishment } from './models/UserAccomplishment';

const API_URL = 'http://localhost:8080/api/accomplishment/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUserAccomplishment(): Observable<UserAccomplishment>{
    return this.http.get<UserAccomplishment>(API_URL);
  }


  likeRecipe(recipeId : number) : Observable<any>{
    return this.http.post(API_URL + 'like', {
      likedRecipeId : recipeId
    });
  }

  completeRecipe(recipeId : number) : Observable<any>{
    return this.http.post(API_URL + 'complete', {
      completedRecipeId : recipeId
    });
  }


  uploadRecipe(recipeId : number) : Observable<any>{
    return this.http.post(API_URL + 'upload', {
      uploadedRecipeId : recipeId
    });
  }


}