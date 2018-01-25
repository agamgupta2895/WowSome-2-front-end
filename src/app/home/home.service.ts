import {AuthService} from '../auth/auth.service';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class HomeService {

  searchValue = new Subject();

  constructor(public  authService: AuthService, public http: Http) {
  }

  searchUser(value) {
    this.searchValue.next(value);
  }

  getUser(id) {
    const token = this.authService.getToken();
    return this.http.get('http://localhost:3000/view/' + id + '?token=' + token);
  }
}
