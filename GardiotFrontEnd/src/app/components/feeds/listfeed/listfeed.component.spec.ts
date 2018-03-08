import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfeedComponent } from './listfeed.component';

describe('ListfeedComponent', () => {
  let component: ListfeedComponent;
  let fixture: ComponentFixture<ListfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
