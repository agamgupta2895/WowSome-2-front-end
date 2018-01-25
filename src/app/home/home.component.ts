import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {HomeService} from './home.service';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search = false;
  users: any;
  private subscription: Subscription;

  constructor(public homeService: HomeService,
              public searchService: SearchService,
              ) {
  }

  ngOnInit() {
    this.getUserDetails();
    this.subscription = this.homeService.searchValue.subscribe(
      (response) => {
        this.search = true;
        if (response === '') {
          this.search = false;
          this.getUserDetails();
        } else {
          this.searchService.getUsers(response).subscribe(
            (searchUsers) => {
              console.log(searchUsers.json())
              if (searchUsers.json().success) {
                this.users = searchUsers.json().data;
              } else {
                console.log('error handling');
              }
            }
          );
        }
      }
    );
  }
  getUserDetails(){
    this.homeService.getUser(localStorage.getItem('user_id')).subscribe(
      (user) => {
        if (user.json().success) {
          this.users = user.json().data;
        } else {
          console.log('error');
        }
      }
    );
  }

}
