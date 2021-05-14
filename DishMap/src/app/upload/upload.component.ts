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

  direction : string = "";

  pictureFile : File;

  // Uldirection : string;

  ingredient : Ingredient = new Ulingredient;

  handleFileInput(event) {

    this.pictureFile = event.target.files[0];;
    
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
  }

  saveIngredient() {
    if (!(this.ingredient.name.length && this.ingredient.quantity.length)) {
      return;
    }
    if (!this.ingredient.treatment) {
      this.ingredient.treatment = " ";
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
    const formData = new FormData(); 
    const recipeJson = JSON.stringify(this.recipe);
    // const recipeJson = JSON.stringify(this.recipe, undefined, 2);
    const name = this.recipe.title;
    formData.append('file',this.pictureFile, name);
    formData.append('recipeJson', recipeJson);
    // formData.append('title', this.recipe.title);
    // formData.append('introduction', this.recipe.introduction);
    // formData.append('nationality', this.recipe.nationality);
    // formData.append('ingredients', JSON.stringify(this.recipe.ingredients));
    // formData.append('directions', this.recipe.directions.toString());
    this.recipeService.uploadRecipe(formData).subscribe();
    this.submitted = true;
  }

  // id: number;
  // title: string;
  // nationality: string;
  // introduction: string;
  // ingredients : Ingredient[];
  // directions : string[];
  // popularity = 0;
  // pictureFile: File;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getNations()
    .subscribe(nations => this.nations = nations);
  }

}

class Ulrecipe implements Recipe {
  _id: string = "";
  title: string;
  nationality: string;
  introduction: string;
  ingredients : Ingredient[];
  directions : string[];
  popularity = 0;
  imgUrl = "";
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