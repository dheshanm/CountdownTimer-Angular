import { TestBed } from '@angular/core/testing';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { angularFireAuthStub } from '../test/angularfireauth.stub';
import { angularFirestoreStub } from '../test/angularfirestore.stub';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AngularFireAuth, useValue: angularFireAuthStub},
        {provide: AngularFirestore, useValue: angularFirestoreStub},
      ],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
