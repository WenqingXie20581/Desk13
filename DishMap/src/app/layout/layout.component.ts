import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  nations : string[];

  showNations : boolean = true;

  constructor(private recipeService: RecipeService,
    private location: Location) { }

  getNations(): void {
    this.recipeService.getNations()
      .subscribe(nations => this.nations = nations)
 }

 goBack(): void {
  this.location.back();
}



  ngOnInit(): void {
    this.getNations();
  }

}
