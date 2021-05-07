import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { UserAccomplishment } from '../models/UserAccomplishment';
import { RecipeService } from '../recipe.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-accomplishment',
  templateUrl: './accomplishment.component.html',
  styleUrls: ['./accomplishment.component.css'],
})
export class AccomplishmentComponent implements OnInit {
  private accomplishment: UserAccomplishment;

  showLinkedRecipes: boolean = true;
  showUploadedRecipes: boolean = false;
  showCompletedRecipes: boolean = false;

  likedRecipes: Recipe[] = [];
  completedRecipes: Recipe[] = [];
  uploadedRecipes: Recipe[] = [];

  constructor(
    private userService: UserService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.getUserAccomplishment();
  }

  getUserAccomplishment(): void {
    this.userService.getUserAccomplishment().subscribe(
      (data) => {
        this.accomplishment = data;
        this.getLikedRecipes();
        this.getCompletedRecipes();
        this.getUploadedRecipes();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  showRecipes(event) {
    switch(event.target.outerText){
      case "LinkedRecipes":
        this.showLinkedRecipes = true;
        this.showUploadedRecipes = false;
        this.showCompletedRecipes = false;
        break;
      case "UploadedRecipes":
        this.showLinkedRecipes = false;
        this.showUploadedRecipes = true;
        this.showCompletedRecipes = false;
      break;
      case "CompletedRecipes":
        this.showLinkedRecipes = false;
        this.showUploadedRecipes = false;
        this.showCompletedRecipes = true;
      break;
      default:
        this.showLinkedRecipes = false;
        this.showUploadedRecipes = false;
        this.showCompletedRecipes = false;
    }
  }

  getLikedRecipes() {
    this.accomplishment.likedRecipeIds.forEach((id) => {
      this.recipeService.getRecipeById(id).subscribe(
        (recipe) => this.likedRecipes.push(recipe),
        (err) => console.log(err)
      );
    });
  }

  getCompletedRecipes() {
    this.accomplishment.completedRecipeIds.forEach((id) => {
      this.recipeService.getRecipeById(id).subscribe(
        (recipe) => this.completedRecipes.push(recipe),
        (err) => console.log(err)
      );
    });
  }

  getUploadedRecipes() {
    this.accomplishment.uploadedRecipeIds.forEach((id) => {
      this.recipeService.getRecipeById(id).subscribe(
        (recipe) => this.uploadedRecipes.push(recipe),
        (err) => console.log(err)
      );
    });
  }
}
