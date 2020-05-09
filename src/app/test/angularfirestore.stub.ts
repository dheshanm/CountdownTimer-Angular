import { testUser } from './user.stub'
import { Event } from '../models/event.model';
import { testEvent } from '../test/event.stub';
import { 
  DocumentChangeAction,
  DocumentChange,
  DocumentSnapshot,
  // DocumentReference
} from 'angularfire2/firestore';
import { from } from 'rxjs';

const eventData: Event[][] = [[
  testEvent
]];

// const docRefStub: DocumentReference = {
//   id: "XK4wkRLcvB3Ts9D77k3m",
//   parent: null,
//   path: "countdowns/XK4wkRLcvB3Ts9D77k3m",
// }

const snapshotDocStub: DocumentSnapshot<Event> = {
  id: "XK4wkRLcvB3Ts9D77k3m",
  ref: null,
  metadata: null,
  exists: true,
  data: (): Event => (
    {
      title: 'GOT S08E08',
      subtitle: 'HBO Entertainment',
      isFeatured: true,
      count: 12,
      content: 'A Royal Drama',
      time_unix: 1590694213,
      tags: ['test', 'HBO']
    }
  ),
  get: null,
  isEqual: null
};

const payloadStub: DocumentChange<Event> = {
  type:"added",
  doc: snapshotDocStub,
  oldIndex: -1,
  newIndex: 0,
}

const snapshotData: DocumentChangeAction<Event>[] =[
{
  type: "added",
  payload: payloadStub
}];

const data = from(eventData);
const snapData = from([snapshotData])

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data),
  snapshotChanges: jasmine.createSpy('snapshotChanges').and.returnValue(snapData)
}

const docStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(testUser)
}

export const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub),
  doc: jasmine.createSpy('doc').and.returnValue(docStub)
}