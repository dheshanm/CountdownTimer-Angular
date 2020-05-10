import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { User } from '../models/user.model';

import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  guest$: Observable<User>;
  uid = null;

  constructor(
    private afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.uid = user.uid;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.guest$ = this.afs.doc<User>(`users/guest-user`).valueChanges();
  }

  getUser() {
    if(this.uid == null) {
      return null
    } else {
      return this.afs.doc<User>(`users/${this.uid}`);
    }
  }

  async getUserByID(id: string): Promise<User> {
    let doc = await this.afs.doc(`users/${id}`).get().toPromise();
    return doc.data() as User;
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    let data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    if(typeof(user.events) != "undefined"){
      data["events"] = user.events;
    }

    console.log(data);
    return userRef.set(data, { merge: true });
  }

}
