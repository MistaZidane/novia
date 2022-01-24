import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService,private router: Router) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // return next.handle(request).do((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse) {
    //     // do stuff with response if you want
    //   }
    // }, (err: any) => {
    //   if (err instanceof HttpErrorResponse) {
    //     if (err.status === 401) {
    //       // redirect to the login route
    //       this.router.navigate(['user']);
    //       // or show a modal
    //     }
    //   }
    // });

    
    console.log("am here");

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          localStorage.removeItem('token');
          this.router.navigate(['login']);
          console.log("token expired")
          // or show a modal
        }
      }
    }));
  }
  
}