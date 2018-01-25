import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  showMessage = false;

  constructor(private authService: AuthService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    const number = form.value.number;


    this.authService.signUpUser(name, email, password, number).subscribe(
      (response) => {
        if (response.json().success) {
          localStorage.setItem('wowsome_token', response.json().token);
          localStorage.setItem('user_id', response.json().data._id);
          this.router.navigate(['home']);
        } else {
          this.showMessage = true;
          this.messageService.setHeader(response.json().data.header);
          this.messageService.setMeassage(response.json().data.message);
        }
      },
      (error) => console.log(error)
    );
  }

  dismissMessage() {
    this.showMessage = false;
  }
}
