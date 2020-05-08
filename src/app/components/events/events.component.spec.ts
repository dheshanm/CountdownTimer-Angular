import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFirestore } from 'angularfire2/firestore';

import { EventsComponent } from './events.component';
import { angularFirestoreStub } from '../../test/angularfirestore.stub';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsComponent ],
      providers: [
        {provide: AngularFirestore, useValue: angularFirestoreStub},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
