import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe? : Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private location: Location) {}

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  ngOnInit(): void {
    this.getRecipe();
  }

}