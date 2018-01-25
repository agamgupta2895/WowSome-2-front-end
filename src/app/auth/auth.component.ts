import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  existingUser: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  onSignIn() {
    this.existingUser = true;
  }

  onSignUp() {
    this.existingUser = false;
  }

}
