import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})
export class WorldmapComponent implements OnInit {

  nations: String[];

  constructor(private recipeService: RecipeService) {

  }

  getNations(): void {
     this.recipeService.getNations()
       .subscribe(nations => this.nations = nations)
  }

  ngOnInit(): void {
  }

}
