import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookbookComponent } from './cookbook/cookbook.component'

const routes: Routes = [
  { path: 'cookbook', component: CookbookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
