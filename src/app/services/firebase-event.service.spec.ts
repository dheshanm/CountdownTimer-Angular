import { TestBed } from '@angular/core/testing';

import { AngularFirestore } from 'angularfire2/firestore';

import { FirebaseEventService } from './firebase-event.service';
import { angularFirestoreStub } from '../test/angularfirestore.stub';

describe('FirebaseEventService', () => {
  let service: FirebaseEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AngularFirestore, useValue: angularFirestoreStub},
      ],
    });
    service = TestBed.inject(FirebaseEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
