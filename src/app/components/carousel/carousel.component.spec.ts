import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFirestore } from 'angularfire2/firestore';

import { CarouselComponent } from './carousel.component';
import { angularFirestoreStub } from '../../test/angularfirestore.stub';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      providers: [
        {provide: AngularFirestore, useValue: angularFirestoreStub},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
