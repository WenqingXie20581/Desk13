import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {

  recipes ?: Recipe[];

  constructor(private recipeService: RecipeService) {

   }

   getRecipes(): void {
      this.recipeService.getRecipe()
        .subscribe(recipes => this.recipes = recipes)
   }

  ngOnInit(): void {
    this.getRecipes();
  }

}
