import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../_models/users';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<Users>('http://localhost:8080/users/login', { username: username, password: password })
      .pipe(
        map(result => {
          localStorage.setItem('USER', JSON.stringify(result));
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('USER') !== null);
  }
  getToken() {
    if (this.loggedIn)
      return JSON.parse(localStorage.getItem('USER')).token;
  }
  intercept(req, next) {
    console.log(this.loggedIn);
    let tokenizedreq = req.clone({
      setHeaders: {
        Authorization: this.getToken()
      }
    })
    return next.handle(tokenizedreq)
  }
}
