import { Component, OnInit } from '@angular/core';
import { KysymyksetService } from '../kysymykset.service';
import { Kysymys } from '../kysymys.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  kysymykset: Kysymys[] = [];
  constructor(
    private kysymyksetService: KysymyksetService,
    public authService: AuthService
  ) {}
  ngOnInit() {
    this.kysymyksetService.getKysymykset().subscribe((res: Kysymys[]) => {
      this.kysymykset = res;
    });
  }
  deleteKysymys(kysymys: Kysymys) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.kysymyksetService
        .deleteContact(kysymys)
        .then(() => console.log('delete successful'));
    }
  }
  signOut() {
    this.authService
      .signOut()
      .then(() => (this.authService.user = null))
      .catch((e) => console.log(e.message));
  }
}
