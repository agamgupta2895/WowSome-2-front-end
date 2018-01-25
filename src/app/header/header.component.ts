import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {HomeService} from "../home/home.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router, public homeService: HomeService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.onLogout();
    this.router.navigate(['/auth']);
  }


}
