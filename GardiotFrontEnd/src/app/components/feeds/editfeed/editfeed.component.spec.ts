import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfeedComponent } from './editfeed.component';

describe('EditfeedComponent', () => {
  let component: EditfeedComponent;
  let fixture: ComponentFixture<EditfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
