import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private tokenStorageService : TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(
      (err) => {
        if([401, 403].includes(err.status) && this.tokenStorageService.getUser){
          this.tokenStorageService.signOut;
        }
        const error = err.error?.message || err.statusText;
        console.error(err);
        return throwError(error);      
      }
    )
    );
  }
}
