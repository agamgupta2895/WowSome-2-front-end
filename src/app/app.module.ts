import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AuthService} from './auth/auth.service';
import {MessageService} from './services/message.service';
import { HeaderComponent } from './header/header.component';
import {HomeService} from "./home/home.service";
import {SearchService} from "./services/search.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, MessageService, HomeService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
