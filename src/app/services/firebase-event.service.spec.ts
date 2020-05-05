import { TestBed } from '@angular/core/testing';

import { FirebaseEventService } from './firebase-event.service';

describe('FirebaseEventService', () => {
  let service: FirebaseEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
