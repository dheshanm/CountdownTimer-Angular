import { testUser } from './user.stub'
import { Event } from '../models/event.model';
import { from, of } from 'rxjs';

const eventData: Event[][] = [[
  { 
    id: 'XK4wkRLcvB3Ts9D77k3m',
    title: 'GOT S08E08',
    subtitle: 'HBO Entertainment',
    isFeatured: true,
    count: 12,
    content: 'A Royal Drama',
    time_unix: 1590694213,
    tags: ['test', 'HBO']
  },
]];

const snapshotData =
{
  type: "added",
  payload: {
    type:"added",
    doc: {
      id: "XK4wkRLcvB3Ts9D77k3m",
      ref: {
        id: "XK4wkRLcvB3Ts9D77k3m",
        parent: {
          id: "countdowns",
          parent: null,
          path: "countdowns",
        },
        path: "countdowns/XK4wkRLcvB3Ts9D77k3m",
        data: () => (
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
      },
      exists: true,
    },
    oldIndex: -1,
    newIndex: 0,
  }
}

const data = from(eventData);
const snapData = of([snapshotData])


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