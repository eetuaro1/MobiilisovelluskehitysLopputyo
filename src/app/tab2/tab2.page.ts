import { Component } from '@angular/core';
import { KysymyksetService } from '../kysymykset.service';
import { Kysymys } from '../kysymys.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  kysymys: Kysymys = {
    nimi: '',
    kysymys: '',
    sposti: '',
    puhnro: '',
    vastaus: '',
  };

  constructor(
    private kysymyksetService: KysymyksetService,
    public authService: AuthService
  ) {}
  sent() {
    this.kysymyksetService.addKysymys(this.kysymys);
    new Notification('Kysymyksesi on lähetetty!');
    this.kysymys = {
      nimi: '',
      kysymys: '',
      sposti: '',
      puhnro: '',
      vastaus: '',
    };
  }
  signOut() {
    this.authService
      .signOut()
      .then(() => (this.authService.user = null))
      .catch((e) => console.log(e.message));
  }
}
