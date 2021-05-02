import { Component, OnInit } from '@angular/core';
import { UploadRecipe } from '../models/UploadRecipe';
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

  direction : string = "";

  // Uldirection : string;

  ingredient : Ingredient = new Ulingredient;

  handleFileInput(event) {

    this.recipe.pictureFile = event.target.files[0];;
    
  }

  addDirection() : void {
    console.log(this.direction);
    if (!this.direction.length) {
        return;
    }
    this.recipe.directions.push(this.direction);
    this.direction = "";
  }

  addIntroduction(e) : void {
    const introduction = e.target.value;
    if (!introduction.length) {
      return;
    }
    this.recipe.introduction = introduction;
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

  onSubmit() { 
    this.recipeService.uploadRecipe(this.recipe);
    this.submitted = true;
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getNations()
    .subscribe(nations => this.nations = nations);
  }

}

class Ulrecipe implements UploadRecipe {

  id: number;
  title: string;
  nationality: string;
  introduction: string;
  ingredients : Ingredient[];
  directions : string[];
  popularity = 0;
  pictureFile: File;

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