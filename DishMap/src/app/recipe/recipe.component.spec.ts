import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/rx';
import { of } from 'rxjs';

import { RecipeComponent } from './recipe.component';

const paramMap1  = {
  get( id : string): string{
    return '123';
  }
}

const fakeActivatedRoute = {
  paramMap : of(paramMap1),
  snapshot: {
    paramMap : {
      get( id : string): string{
        return '123';
      }
    }
  }
} as ActivatedRoute;


describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeComponent ],
      providers : [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
