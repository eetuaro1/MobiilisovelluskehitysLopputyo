import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Kysymys } from './kysymys.model';

@Injectable({
  providedIn: 'root',
})
export class KysymyksetService {
  constructor(private firestore: Firestore) {}
  addKysymys(kysymys: Kysymys) {
    const kysymysRef = collection(this.firestore, 'kysymykset');
    return addDoc(kysymysRef, kysymys);
  }
  getKysymykset(): Observable<Kysymys[]> {
    const kysymysRef = collection(this.firestore, 'kysymykset');
    return collectionData(kysymysRef, { idField: 'id' }) as Observable<
      Kysymys[]
    >;
  }
  deleteContact(kysymys: Kysymys) {
    const kysymysDocRef = doc(this.firestore, `kysymykset/${kysymys.id}`);
    return deleteDoc(kysymysDocRef);
  }
}
