import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { Ingredient} from '../models/Ingredient';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})


export class UploadComponent implements OnInit {

  submitted : boolean = false;

  nations : string[];

  recipe : Ulrecipe = new Ulrecipe;

  // Uldirection : string;

  ingredient : Ingredient = new Ulingredient;

  
  // addIngredients(value : in) {
  //   this.recipe.ingredients.push()
  // }

  addDirection(e) : void {
    const direction = e.target.value;
    if (!direction.length) {
      return;
    }
    this.recipe.directions.push(direction);
    e.target.value = '';
  }

  addIntroduction(e) : void {
    const direction = e.target.value;
    if (!direction.length) {
      return;
    }
    this.recipe.introduction = direction;
    e.target.value = '';
  }

  saveIngredient() {
    if (!(this.ingredient.name.length && this.ingredient.quantity.length && this.ingredient.treatment.length)) {
      return;
    }
    this.recipe.ingredients.push(this.ingredient);
    this.ingredient = new Ulingredient;
  }

  removeDirection (index: number): void {
    this.recipe.directions.splice(index, 1)
  }

  removeIngredient (index: number): void {
    this.recipe.ingredients.splice(index, 1)
  }

  onSubmit() { this.submitted = true; }

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getNations()
    .subscribe(nations => this.nations = nations);
  }

}

class Ulrecipe implements Recipe {

  id: number;
  title: string;
  nationality: string;
  introduction: string;
  ingredients : Ingredient[];
  directions : string[];
  imgUrl = null;

  constructor(){
    this.ingredients = new Array();
    this.directions = new Array();
  }
 }

 class Ulingredient implements Ingredient {
  name : string;
  quantity : string;
  treatment : string;

  constructor(){
  }
 }