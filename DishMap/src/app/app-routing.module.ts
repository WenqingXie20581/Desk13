import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CookbookComponent } from './cookbook/cookbook.component'
import { RecipeComponent } from './recipe/recipe.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: '', redirectTo: '/worldmap', pathMatch: 'full' },
  { path: 'worldmap', component: WorldmapComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'cookbook/:nation', component: CookbookComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'upload', component: UploadComponent},
  {path: 'profile', component: ProfileComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
