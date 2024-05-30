import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: User | null; //Firebasesta saatava käyttäjäolio

  constructor(private auth: Auth, private router: Router) {}

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        this.router.navigate(['/tab1']);
        new Notification('Kirjautuminen onnistui!');
        this.user = res.user;
      })
      .catch((error) => {
        new Notification('Kirjautuminen epäonnistui!');
        console.log('Something is wrong:', error.message);
      });
  }
  loginGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider()) // palauttaa promisen
      .then((result) => {
        this.router.navigate(['/tab1']);
        new Notification('Kirjautuminen onnistui!');
        console.log(result.user); // result sisältää Googlen käyttäjätietoja
        this.user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /* Sign out */
  signOut() {
    new Notification('Sinut on kirjattu ulos!');
    return signOut(this.auth);
  }
}
