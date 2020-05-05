import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Event } from '../models/event.model'

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  countdownCollection: AngularFirestoreCollection<Event>;
  featuredCollection: AngularFirestoreCollection<Event>;
  countdowns: Observable<Event[]>;
  featuredCountdowns: Observable<Event[]>;;
  countdownDoc: AngularFirestoreDocument<Event>;

  constructor(public afs:AngularFirestore) {
    this.countdownCollection = this.afs.collection('countdowns', ref => ref.orderBy('count', 'desc'));
    this.featuredCollection  = this.afs.collection('countdowns', ref => ref.where("isFeatured", "==", true));

    this.countdowns = this.countdownCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Event;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.featuredCountdowns = this.featuredCollection.snapshotChanges().pipe(
      map(changes => {
      return changes.map( a => {
        const data = a.payload.doc.data() as Event;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getItems(): Observable<Event[]> {
    return this.countdowns;
  }

  getFeaturedItems() {
    return this.featuredCountdowns;
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

  deleteItem(item: Event) {
    this.countdownDoc = this.afs.doc(`countdowns/${item.id}`);
    this.countdownDoc.delete();
  }

  updateItem(item: Event) {
    this.countdownDoc = this.afs.doc(`countdowns/${item.id}`);
    this.countdownDoc.update(item);
  }

  incrementCount(item: Event) {
    this.countdownDoc = this.afs.doc(`countdowns/${item.id}`);
    item.count = item.count + 1;
    this.countdownDoc.update(item);
  }

}
