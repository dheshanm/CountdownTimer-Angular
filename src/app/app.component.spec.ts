import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AuthService } from './services/auth.service';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { angularFireAuthStub } from './test/angularfireauth.stub';
import { angularFirestoreStub } from './test/angularfirestore.stub';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: AngularFireAuth, useValue: angularFireAuthStub},
        {provide: AngularFirestore, useValue: angularFirestoreStub},
        {provide: AuthService, useClass: AuthService},
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Countdown Timer'`, () => {
    expect(app.title).toEqual('Countdown Timer');
  });

  it('should render title', () => {
    fixture.detectChanges();

    expect(de.query(By.css('.logo')).nativeElement.innerText).toContain('Countdown Timer');
    // fixture.whenRenderingDone().then(() => {
    //   expect(de.query(By.css('.logo')).nativeElement.innerText).toContain('Countdown Timer');
    // });
  });
});
