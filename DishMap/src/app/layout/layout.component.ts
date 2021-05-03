import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Location } from '@angular/common';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  nations : string[];

  showNations : boolean = true;
  isLoggedIn : boolean = false;

  constructor(
    private recipeService: RecipeService,
    private location: Location,
    private tokenStorageService: TokenStorageService) { }

  getNations(): void {
    this.recipeService.getNations()
      .subscribe(nations => this.nations = nations)
  }

  goBack(): void {
    this.location.back();
  }


  logOut(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }



  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.getNations();
  }

}
