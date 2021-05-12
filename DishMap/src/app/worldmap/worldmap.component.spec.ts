import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { WorldmapComponent } from './worldmap.component';
import { Observable } from 'rxjs/rx';
import { of } from 'rxjs';



describe('WorldmapComponent', () => {
  let component: WorldmapComponent;
  let fixture: ComponentFixture<WorldmapComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['worldamp']);
  const recipeService = jasmine.createSpyObj('RecipeService', ['getNations']);
  const nations = ['UK', 'CN', 'USA'];
  const getNationsSpy = recipeService.getNations.and.returnValue(of(nations));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldmapComponent ],
      providers: [ { provide: RecipeService, useValue: recipeService }, 
        HttpClient,
        HttpHandler,
        {provide: Router, useValue: routerSpy}
       ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

   
      
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have nation after Angular calls ngOnInit', () => {
    component.ngOnInit();
    expect(component.nations).toBeDefined();
  });

  it('should have option after Angular calls ngOnInit', () => {
    component.ngOnInit();
    expect(component.option).toBeDefined();
  });

  it('should have <h2> with "words"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h2 = bannerElement.querySelector('h2');
    expect(h2.textContent).toEqual("Hi, Do you want to travel with us? Let's start from Bristol and eat all delicious dishes in the world");
  });

});
