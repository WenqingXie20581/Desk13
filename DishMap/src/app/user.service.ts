import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccomplishment } from './models/UserAccomplishment';
import { TokenStorageService } from './token-storage.service';
import { UserProfile} from './models/UserProfile'
import { UserInfo } from './models/UserInfo'

// 端口号重新指定 808 吗?还是按照之前的 3000 端口?
// const API_URL = 'http://localhost:8080/api/user/';
const API_URL = 'http://localhost:3000/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private tokenStorageService : TokenStorageService
  ) { }


  getUserAccomplishment(): Observable<UserAccomplishment>{
    let id =  this.tokenStorageService.getUser().id;
    const URL = API_URL+'accomplishment/'+id;
    return this.http.get<UserAccomplishment>(URL);
  }

  getUserProfile(): Observable<UserAccomplishment>{
    let id =  this.tokenStorageService.getUser().id;
    const URL = API_URL+'profile/'+id;
    return this.http.get<UserAccomplishment>(API_URL);
  }


  likeRecipe(recipeId : string) : Observable<any>{
    return this.http.post(API_URL + 'like', {
      likedRecipeId : recipeId
    });
  }

  completeRecipe(recipeId : string) : Observable<any>{
    return this.http.post(API_URL + 'complete', {
      completedRecipeId : recipeId
    });
  }


  uploadRecipe(recipeId : string) : Observable<any>{
    return this.http.post(API_URL + 'upload', {
      uploadedRecipeId : recipeId
    });
  }


}
