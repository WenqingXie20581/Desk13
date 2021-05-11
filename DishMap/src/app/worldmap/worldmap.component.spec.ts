import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { WorldmapComponent } from './worldmap.component';

describe('WorldmapComponent', () => {
  let component: WorldmapComponent;
  let fixture: ComponentFixture<WorldmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldmapComponent ],
      providers : [Router,Function]
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

  it('should have <h2> with "banner works!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h2 = bannerElement.querySelector('h2');
    expect(h2.textContent).toEqual("Hi, Do you want to travel with us? Let's start from Bristol and eat all delicious dishes in the world");
  });

});
