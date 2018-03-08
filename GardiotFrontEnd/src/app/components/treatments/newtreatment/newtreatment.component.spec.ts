import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtreatmentComponent } from './newtreatment.component';

describe('NewtreatmentComponent', () => {
  let component: NewtreatmentComponent;
  let fixture: ComponentFixture<NewtreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
