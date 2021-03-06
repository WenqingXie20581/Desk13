import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CookbookComponent } from './cookbook.component';

const paramMap1  = {
  get( nation : string): string{
    return 'China';
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

describe('CookbookComponent', () => {
  let component: CookbookComponent;
  let fixture: ComponentFixture<CookbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookbookComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
