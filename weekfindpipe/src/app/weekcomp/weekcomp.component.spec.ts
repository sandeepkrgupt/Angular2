import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekcompComponent } from './weekcomp.component';

describe('WeekcompComponent', () => {
  let component: WeekcompComponent;
  let fixture: ComponentFixture<WeekcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
