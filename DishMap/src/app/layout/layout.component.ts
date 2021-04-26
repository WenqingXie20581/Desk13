import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  nations : string[];

  showNations : boolean = true;

  constructor(private recipeService: RecipeService) { }

  getNations(): void {
    this.recipeService.getNations()
      .subscribe(nations => this.nations = nations)
 }



  ngOnInit(): void {
    this.getNations();
  }

}
