import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { AuthService } from './auth.service';
import { angularFireAuthStub } from '../test/angularfireauth.stub';
import { angularFirestoreStub } from '../test/angularfirestore.stub';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: AngularFireAuth, useValue: angularFireAuthStub},
        {provide: AngularFirestore, useValue: angularFirestoreStub},
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
