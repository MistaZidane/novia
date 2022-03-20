import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private helper: JwtHelperService) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>('http://localhost:8001/login', {email: email, password: password})
      .pipe(
        map(result => {
          console.log(result);
          localStorage.setItem('user', JSON.stringify(result));
          localStorage.setItem('token', result.token);
          return true;
        })
      );
  }
  public getToken(): any {
    return localStorage.getItem('token');
    
  }
  public isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return helper.isTokenExpired(token);
  }
  cachedRequests: Array<HttpRequest<any>> = [];

  public collectFailedRequest(request:any): void {
      this.cachedRequests.push(request);
    }
  public retryFailedRequests(): void {
      // retry the requests. this method can
      // be called after the token is refreshed
    }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  // checkTokenStatus(){
  //   let headers = new HttpHeaders();
  //   let token: any = localStorage.getItem('token') ? localStorage.getItem('token') : "empty-token"
  //   console.log(token);
    
  //   if(token == ''){

  //     token = 'empty-token';
  //     console.log(
  //       'ffccfchhc'
  //     );
      
  //   }
  //   headers.append("x-access-token", token);
    
  //  return this.http.post('http://localhost:8000/auth-check', {}, {headers}).pipe(map((result:any)=>{
  //     return result.auth;
  //   })).toPromise()
  // }
  public get loggedIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
