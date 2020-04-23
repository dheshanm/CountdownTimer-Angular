import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCdComponent } from './create-cd.component';

describe('CreateCdComponent', () => {
  let component: CreateCdComponent;
  let fixture: ComponentFixture<CreateCdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCdComponent ]
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
