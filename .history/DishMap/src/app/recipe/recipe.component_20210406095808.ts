import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {

   }

   getRecipes(): void {
      this.recipeService.getRecipe()
        .subscribe(recipes => this.recipes = recipes)
   }

  ngOnInit(): void {
  }

}
