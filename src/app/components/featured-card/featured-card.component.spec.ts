import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFirestore } from 'angularfire2/firestore';

import { FeaturedCardComponent } from './featured-card.component';
import { angularFirestoreStub } from '../../test/angularfirestore.stub';
import { testEvent } from '../../test/event.stub';

describe('FeaturedCardComponent', () => {
  let component: FeaturedCardComponent;
  let fixture: ComponentFixture<FeaturedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedCardComponent ],
      providers: [
        {provide: AngularFirestore, useValue: angularFirestoreStub},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCardComponent);
    component = fixture.componentInstance;

    component.data = testEvent;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept input', () => {
    expect(component.data).toBe(testEvent);
  });
});
