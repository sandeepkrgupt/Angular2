import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralCompComponent } from './structural-comp.component';

describe('StructuralCompComponent', () => {
  let component: StructuralCompComponent;
  let fixture: ComponentFixture<StructuralCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuralCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
