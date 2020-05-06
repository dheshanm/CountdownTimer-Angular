import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipDownComponent } from './flipdown.component';

describe('FlipDownComponent', () => {
  let component: FlipDownComponent;
  let fixture: ComponentFixture<FlipDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
