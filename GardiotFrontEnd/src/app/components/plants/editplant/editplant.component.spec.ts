import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditplantComponent } from './editplant.component';

describe('EditplantComponent', () => {
  let component: EditplantComponent;
  let fixture: ComponentFixture<EditplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
