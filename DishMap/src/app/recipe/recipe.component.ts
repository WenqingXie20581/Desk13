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

    fav : boolean = false;

    complete : boolean = true;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    route.params.subscribe(val => {
      this.getRecipe();
      // this.getTop10recipes();
  });
  }

  addFav() {
    if (this.fav === false) {
      this.recipe.popularity++;
      this.recipeService.addFavour(this.recipe).subscribe(fav => this.fav = true)
    }   
  }

  addComplete(){
    if (this.fav === false) {
        this.recipeService.addComplete(this.recipe).subscribe(complete => this.complete = true)
      }   
  }
  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
      this.recipeService.getRecipeById(id)
      .subscribe(recipe => this.recipe = recipe);
  }
  
  ngOnInit(): void {
  }

  // getTop10recipes():void {
  //   this.recipeService.getTopRecipes()
  //   .subscribe(recipes => this.topRecipes = recipes);
  // }

}
