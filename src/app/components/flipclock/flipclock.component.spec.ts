import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipclockComponent } from './flipclock.component';

describe('FlipclockComponent', () => {
  let component: FlipclockComponent;
  let fixture: ComponentFixture<FlipclockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipclockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
