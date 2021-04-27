import { Component, OnInit} from '@angular/core';
import { Recipe } from '../models/Recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

    recipe : Recipe ;

    topRecipes : Recipe[];


  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    route.params.subscribe(val => {
      this.getRecipe();
      this.getTop10recipes();
  });
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
      this.recipeService.getRecipeById(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  ngOnInit(): void {
    // this.getRecipe();
    // this.getTop10recipes();
  }

  getTop10recipes():void {
    this.recipeService.getTopRecipes()
    .subscribe(recipes => this.topRecipes = recipes);
  }

}
