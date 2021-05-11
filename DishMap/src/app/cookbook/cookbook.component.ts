import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css'],
})
export class CookbookComponent implements OnInit {
  recipes: Recipe[];

  currentRecipes: Recipe[];

  currentNation: string;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {

  }

  //  getRecipes(): void {
  //     this.nation = this.route.snapshot.paramMap.get('nation');
  //     this.recipeService.getRecipesByNation(this.nation)
  //       .subscribe(recipes => this.recipes = recipes)
  //  }


  getRecipes() {
    if (!this.recipes) {
      this.recipeService.getRecipes().subscribe(
        (recipes) => {
        this.recipes = recipes;
        this.getRecipesOfNation();
        },
        err => console.log(err)
      );
    }else{
        this.getRecipesOfNation();
    }
  }

  getRecipesOfNation(): void {
    if (this.currentNation != null) {
      this.currentRecipes = this.recipes.filter((recipe) => {
        if (recipe.nationality === this.currentNation) return true;
        return false;
      });
      console.log(this.currentRecipes);
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (val) => {
      this.currentNation = val.get('nation');
      this.getRecipes();
      //   this.getRecipesOfNation();
      },
      (err) => console.log(err)
    );
    //   this.currentNation = this.route.snapshot.paramMap.get('nation');
    //   this.getRecipes();
    //   this.getRecipesOfNation();
  }
}
