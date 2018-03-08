import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtreatmentComponent } from './listtreatment.component';

describe('ListtreatmentComponent', () => {
  let component: ListtreatmentComponent;
  let fixture: ComponentFixture<ListtreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
