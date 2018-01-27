import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AuthService {
  constructor(private http: Http) {

  }

  signUpUser(name: string, email: string, password: string, number: string) {
    const body = {
      name: name,
      email: email,
      password: password,
      number: number
    };
    return this.http.post('http://localhost:3000/' + 'auth/signup', body);
  }

  signInUser(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };
    return this.http.post('http://localhost:3000/' + 'auth/signin', body);
  }

  isAuthenticated() {
    return this.getToken() === 'null';
  }

  onLogout() {
    localStorage.setItem('wowsome_token', null);
    localStorage.setItem('user_id', null);
  }

  getToken() {
    return localStorage.getItem('wowsome_token');
  }
}
