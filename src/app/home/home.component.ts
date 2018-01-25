import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {HomeService} from './home.service';
import {SearchService} from '../services/search.service';
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search = false;
  users: any;
  showMessage = false;
  private subscription: Subscription;

  constructor(public homeService: HomeService,
              public searchService: SearchService,
              public messageService: MessageService) {
  }

  ngOnInit() {
    this.getUserDetails();
    this.subscription = this.homeService.searchValue.subscribe(
      (response) => {
        this.search = true;
        if (response === '') {
          this.search = false;
          this.showMessage = false;
          this.getUserDetails();
        } else {
          this.getSearchUsers(response);
        }
      }
    );
  }

  getUserDetails() {
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
  getSearchUsers(response) {
    this.searchService.getUsers(response).subscribe(
      (searchUsers) => {
        if (searchUsers.json().success) {
          this.users = searchUsers.json().data;
        } else {
          this.showMessage = true;
          this.messageService.setHeader(searchUsers.json().data.header);
          this.messageService.setMeassage(searchUsers.json().data.message);
        }
      }
    );
  }

  dismissMessage() {
    this.showMessage = false;
  }
}
