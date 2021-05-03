import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { UserAccomplishment } from '../models/UserAccomplishment';
import { RecipeService } from '../recipe.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-accomplishment',
  templateUrl: './accomplishment.component.html',
  styleUrls: ['./accomplishment.component.css']
})
export class AccomplishmentComponent implements OnInit {


  private accomplishment : UserAccomplishment;
  private likedRecipes : Recipe[];
  private completedRecipes : Recipe[];
  private uploadedRecipes : Recipe[]; 

  constructor(
    private userService : UserService,
    private recipeService : RecipeService
    ) { }

  ngOnInit(): void {
    this.getUserAccomplishment;
    this.getLikedRecipes;
    this.getCompletedRecipes;
    this.getUploadedRecipes;
  }


  getUserAccomplishment() :void {
    this.userService.getUserAccomplishment().subscribe(
      data => {this.accomplishment=data},
      err => {console.log(err)}
    )
  }

  getLikedRecipes(){
    this.accomplishment.likedRecipeIds.forEach(
      (id) => {
        this.recipeService.getRecipeById(id).subscribe(
          (recipe) => this.likedRecipes.push(),
          (err) => console.log(err)
        ) 
      }
    )
  }

  getCompletedRecipes(){
    this.accomplishment.completedRecipeIds.forEach(
      (id) => {
        this.recipeService.getRecipeById(id).subscribe(
          (recipe) => this.likedRecipes.push(),
          (err) => console.log(err)
        ) 
      }
    )
  }

  getUploadedRecipes(){
    this.accomplishment.uploadedRecipeIds.forEach(
      (id) => {
        this.recipeService.getRecipeById(id).subscribe(
          (recipe) => this.likedRecipes.push(),
          (err) => console.log(err)
        ) 
      }
    )
  }


}
