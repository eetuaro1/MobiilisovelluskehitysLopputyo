import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(public authService: AuthService) {}
  signOut() {
    this.authService
      .signOut()
      .then(() => (this.authService.user = null))
      .catch((e) => console.log(e.message));
  }
}
