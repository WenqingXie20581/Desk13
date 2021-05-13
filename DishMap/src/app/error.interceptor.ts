import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';
import { asLiteral } from '@angular/compiler/src/render3/view/util';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  url = 'login'

  constructor(
    private tokenStorageService : TokenStorageService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(
      (err) => {
        if([401, 403].includes(err.status) && this.tokenStorageService.getUser){
          this.tokenStorageService.signOut;
          this.router.navigate([this.url]);
        }
        if ([400].includes(err.status)) {
          alert(err.error);
        }
        const error = err.error?.message || err.statusText;
        console.error(err);
        return throwError(error);      
      }
    )
    );
  }
}

export const errorInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
];