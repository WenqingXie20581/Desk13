import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ErrorInterceptor } from './error.interceptor';

const routerSpy = jasmine.createSpyObj('Router', ['']);
describe('ErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorInterceptor,
      {provide: Router, useValue: routerSpy}
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorInterceptor = TestBed.inject(ErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
