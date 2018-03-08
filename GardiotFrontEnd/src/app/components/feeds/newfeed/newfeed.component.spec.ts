import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfeedComponent } from './newfeed.component';

describe('NewfeedComponent', () => {
  let component: NewfeedComponent;
  let fixture: ComponentFixture<NewfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
