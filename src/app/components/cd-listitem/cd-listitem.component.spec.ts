import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFirestore } from 'angularfire2/firestore';

import { CdListitemComponent } from './cd-listitem.component';
import { angularFirestoreStub } from '../../test/angularfirestore.stub';
import { testEvent } from '../../test/event.stub';

describe('CdListitemComponent', () => {
  let component: CdListitemComponent;
  let fixture: ComponentFixture<CdListitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdListitemComponent ],
      providers: [
        {provide: AngularFirestore, useValue: angularFirestoreStub},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdListitemComponent);
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
