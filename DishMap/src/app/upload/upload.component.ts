import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { Ingredient} from '../models/Ingredient';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  submitted : boolean = false;

  recipe : Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
