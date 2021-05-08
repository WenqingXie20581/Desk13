import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

    recipe : Recipe ;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
      this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  ngOnInit(): void {
    this.getRecipe();
  }

}