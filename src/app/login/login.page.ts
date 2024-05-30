import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;
  constructor(public authService: AuthService, private router: Router) {}
  signIn() {
    this.authService.signIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }
  loginGoogle() {
    this.authService.loginGoogle();
  }
}
