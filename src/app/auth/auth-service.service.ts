import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private router: Router, private http: HttpClient) {}
  baseURL: string = 'https://stage.blendedsense.com/api/';

  signIn(loginObj: userModel): Observable<any> {
    return this.http.post<any>(`${this.baseURL}login`, loginObj);
  }

  storeToken(userObj) {
    return localStorage.setItem('token', userObj.token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  Logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
