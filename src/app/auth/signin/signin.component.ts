import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  showMessage = false;

  constructor(private authService: AuthService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  /*Function called when the user submits the signin form */

  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signInUser(email, password).subscribe(
      (response) => {
        if (response.json().success) {
          localStorage.setItem('wowsome_token', response.json().token);
          localStorage.setItem('user_id', response.json().data._id);
          this.router.navigate(['home']);
        } else {
          this.showMessage = true;
          this.messageService.setHeader(response.json().data.header);
          this.messageService.setMeassage((response.json().data.message));

        }
      },
      (error) => console.log(error)
    );
  }

  dismissMessage() {
    this.showMessage = false;
  }

}
