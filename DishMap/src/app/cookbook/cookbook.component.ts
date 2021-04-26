import { Component, OnInit} from '@angular/core';
import { Recipe } from '../models/Recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {

  recipes : Recipe[];

  currentRecipes : Recipe[];

  currentNation : string;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {

   }

  //  getRecipes(): void {
  //     this.nation = this.route.snapshot.paramMap.get('nation');
  //     this.recipeService.getRecipesByNation(this.nation)
  //       .subscribe(recipes => this.recipes = recipes)
  //  }

   getRecipes(): void {
      this.recipeService.getRecipes()
        .subscribe(recipes => this.recipes = recipes)
   }

    getRecipesOfNation(): void {
      if (this.currentNation != null) {
        this.currentRecipes = this.recipes.filter(
          (recipe)=>{
                if (recipe.nationality === this.currentNation) return true;
              return false})
    }
  }
    ngOnInit(): void {
    this.currentNation = this.route.snapshot.paramMap.get('nation');
    this.getRecipes();
    this.getRecipesOfNation();
  }

}
