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

    recipes : Recipe[];

    topRecipes : Recipe[];

    fav : boolean = false;

    complete : boolean = true;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    
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
    this.route.paramMap.subscribe(
      (val) => {
      let id =  val.get('id');
      this.recipeService.getRecipeById(id)
      .subscribe(
        (recipe : Recipe) => {
          this.recipe = recipe;
        },
        (err) => {
          console.log(err);
        }
        );
      },
      (err) => {
        console.log(err);
      },
      

    );
      
  }

  ngOnInit(): void {
    this.getRecipe();
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      recipes => {this.recipes = recipes ;
     this.topRecipes =  this.recipes.sort((a, b) => { return b.popularity - a.popularity}).slice(0,10);
      }
      );
  }

  // getTop10recipes():void {
  //   this.recipeService.getTopRecipes()
  //   .subscribe(recipes => this.topRecipes = recipes);
  // }

}
