import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe? : Recipe;

  constructor() {}

  ngOnInit(): void {}

}
