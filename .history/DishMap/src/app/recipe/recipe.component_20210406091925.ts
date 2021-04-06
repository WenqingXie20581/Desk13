import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe : Recipe;

  constructor(service: RecipeService) {
    this.recipe= service.getRecipe();
   }



  ngOnInit(): void {
  }

}
