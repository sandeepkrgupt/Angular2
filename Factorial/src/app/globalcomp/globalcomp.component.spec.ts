import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalcompComponent } from './globalcomp.component';

describe('GlobalcompComponent', () => {
  let component: GlobalcompComponent;
  let fixture: ComponentFixture<GlobalcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
