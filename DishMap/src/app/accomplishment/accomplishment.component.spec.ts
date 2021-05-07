import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomplishmentComponent } from './accomplishment.component';

describe('AccomplishmentComponent', () => {
  let component: AccomplishmentComponent;
  let fixture: ComponentFixture<AccomplishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomplishmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomplishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
