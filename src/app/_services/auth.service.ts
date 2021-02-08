import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>('http://localhost:8080/users/login', { username: username, password: password })
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
  getToken() {
    if (this.loggedIn)
      return localStorage.getItem('access_token');
  }
  intercept(req, next) {
    //console.log(this.getToken());
    let tokenizedreq = req.clone({
      setHeaders: {
        Authorization: ` ${this.getToken()}`
      }
    })
    return next.handle(tokenizedreq)
  }
}
