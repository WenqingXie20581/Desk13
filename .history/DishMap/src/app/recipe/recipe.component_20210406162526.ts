import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe? : Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  ngOnInit(): void {}

}
