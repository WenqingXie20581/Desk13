import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
@NgModule({
  declarations: [
    AppComponent,
    CookbookComponent,
    WorldmapComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
