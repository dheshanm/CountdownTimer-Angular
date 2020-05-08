import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { CreateCdComponent } from './create-cd.component';
import { angularFirestoreStub } from '../../test/angularfirestore.stub';
import { angularFireAuthStub } from '../../test/angularfireauth.stub';

describe('CreateCdComponent', () => {
  let component: CreateCdComponent;
  let fixture: ComponentFixture<CreateCdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ CreateCdComponent ],
      providers: [
        FormBuilder,
        {provide: AngularFirestore, useValue: angularFirestoreStub},
        {provide: AngularFireAuth, useValue: angularFireAuthStub},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
