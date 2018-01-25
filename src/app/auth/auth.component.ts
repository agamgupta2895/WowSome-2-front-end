import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {HomeService} from "../home/home.service";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  existingUser: boolean;
  subscription: Subscription;
  showMessage = false;

  constructor(public homeService: HomeService, public messageService: MessageService) {
  }

  ngOnInit() {
    this.subscription = this.homeService.searchValue.subscribe(
      (response) => {
        if (response !== '') {
          this.showMessage = true;
          this.messageService.setHeader('Cannot search');
          this.messageService.setMeassage('Please login before searching a user');
        } else {
          this.showMessage = false;
        }
      }
    );
  }

  onSignIn() {
    this.existingUser = true;
  }

  onSignUp() {
    this.existingUser = false;
  }
  dismissMessage() {
    this.showMessage = false;
  }

}
