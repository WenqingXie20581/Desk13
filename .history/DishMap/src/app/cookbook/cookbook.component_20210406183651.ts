import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { RecipeService } from '../recipe.service';
this.route.snapshot.paramMap.get('id');

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {

  recipes ?: Recipe[];

  nation ?: String;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,) {

   }

   getRecipes(): void {
      this.nation = this.route.snapshot.paramMap.get('nation');
      this.recipeService.getRecipes()
        .subscribe(recipes => this.recipes = recipes)
   }

  ngOnInit(): void {
    this.getRecipes();
  }

}
