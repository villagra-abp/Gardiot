import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittreatmentComponent } from './edittreatment.component';

describe('EdittreatmentComponent', () => {
  let component: EdittreatmentComponent;
  let fixture: ComponentFixture<EdittreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
