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
});
