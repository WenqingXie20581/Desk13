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
  showUploadeRecipes: boolean = false;
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
      console.log(this.likedRecipes);
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
    console.log(event);
  
    switch(event.target.value){
      case "LinkedRecipes":
        this.showLinkedRecipes = true;
        this.showUploadeRecipes = false;
        this.showCompletedRecipes = false;
        break;
      case "UploadeRecipes":
        this.showLinkedRecipes = false;
        this.showUploadeRecipes = true;
        this.showCompletedRecipes = false;
      break;
      case "CompletedRecipes":
        this.showLinkedRecipes = false;
        this.showUploadeRecipes = false;
        this.showCompletedRecipes = true;
      break;
      default:
        this.showLinkedRecipes = false;
        this.showUploadeRecipes = false;
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
        (recipe) => this.likedRecipes.push(recipe),
        (err) => console.log(err)
      );
    });
  }

  getUploadedRecipes() {
    this.accomplishment.uploadedRecipeIds.forEach((id) => {
      this.recipeService.getRecipeById(id).subscribe(
        (recipe) => this.likedRecipes.push(recipe),
        (err) => console.log(err)
      );
    });
  }
}
