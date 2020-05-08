import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFirestore } from 'angularfire2/firestore';

import { CdListComponent } from './cd-list.component';
import { angularFirestoreStub } from '../../test/angularfirestore.stub';

describe('CdListComponent', () => {
  let component: CdListComponent;
  let fixture: ComponentFixture<CdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdListComponent ],
      providers: [
        {provide: AngularFirestore, useValue: angularFirestoreStub},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
