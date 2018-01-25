import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Http} from '@angular/http';

@Injectable()
export class SearchService {

  constructor(public authService: AuthService, public http: Http) {
  }

  getUsers(query) {
    const token = this.authService.getToken();
    return this.http.get('http://localhost:3000/' + 'search?name=' + query + '&token=' + token);
  }
}
