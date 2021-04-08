import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CookbookComponent } from './cookbook/cookbook.component'
import { RecipeComponent } from './recipe/recipe.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { FeedbackComponent } from './feedback/feedback.component'

const routes: Routes = [
  { path: '', redirectTo: '/worldmap', pathMatch: 'full' },
  { path: 'worldmap', component: WorldmapComponent },
  { path: 'cookbook/:nation/:id', component: RecipeComponent },
  { path: 'cookbook/:nation', component: CookbookComponent },
  { path: 'feedback', component: FeedbackComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
