import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdListitemComponent } from './cd-listitem.component';

describe('CdListitemComponent', () => {
  let component: CdListitemComponent;
  let fixture: ComponentFixture<CdListitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdListitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
