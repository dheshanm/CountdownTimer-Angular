import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Event } from '../models/event.model'
import { User } from '../models/user.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseEventService {
  countdownCollection: AngularFirestoreCollection<Event>;
  featuredCollection: AngularFirestoreCollection<Event>;
  countdowns: Observable<Event[]>;
  featuredCountdowns: Observable<Event[]>;;
  countdownDoc: AngularFirestoreDocument<Event>;

  constructor(public afs:AngularFirestore) {
    this.countdownCollection = this.afs.collection('countdowns', ref => ref.orderBy('count', 'desc'));
    this.featuredCollection  = this.afs.collection('countdowns', ref => ref.where("isFeatured", "==", true));

    this.countdowns = this.countdownCollection.snapshotChanges().pipe(
      map((changes): Event[] => {
      return changes.map( (docChanges): Event => {
        const data = docChanges.payload.doc.data() as Event;
        data.id = docChanges.payload.doc.id;
        return data;
      });
    }));

    this.featuredCountdowns = this.featuredCollection.snapshotChanges().pipe(
      map((changes): Event[] => {
      return changes.map( (docChanges): Event => {
        const data = docChanges.payload.doc.data() as Event;
        data.id = docChanges.payload.doc.id;
        return data;
      });
    }));
  }

  getItems(): Observable<Event[]> {
    return this.countdowns;
  }

  getFeaturedItems(): Observable<Event[]> {
    return this.featuredCountdowns;
  }

  async getItemByID(id: string): Promise<Event> {
    let doc = await this.afs.doc(`countdowns/${id}`).get().toPromise();
    let event = doc.data() as Event;
    event["id"] = id;
    return event;
  }

  async getUserByUID(uid: string): Promise<User> {
    let doc = await this.afs.doc(`users/${uid}`).get().toPromise();
    return doc.data() as User;
  }

  addItem(item: Event): Promise<string> {
    const post = async (item) => {
      const doc_ref = await this.countdownCollection.add(item);
      return doc_ref.id;
    }
    return post(item);
  }

  async addItemAsync(item: Event): Promise<string> {
    const doc_ref = await this.countdownCollection.add(item);
    return doc_ref.id;
  }

  deleteItem(item: Event): void {
    this.countdownDoc = this.afs.doc(`countdowns/${item.id}`);
    this.countdownDoc.delete();
  }

  updateItem(item: Event): void {
    this.countdownDoc = this.afs.doc(`countdowns/${item.id}`);
    this.countdownDoc.update(item);
  }

  incrementCount(item: Event): void {
    this.countdownDoc = this.afs.doc(`countdowns/${item.id}`);
    item.count = item.count + 1;
    this.countdownDoc.update(item);
  }

}
