import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrianglecompComponent } from './trianglecomp.component';

describe('TrianglecompComponent', () => {
  let component: TrianglecompComponent;
  let fixture: ComponentFixture<TrianglecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrianglecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrianglecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
