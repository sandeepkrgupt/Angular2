import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationCompComponent } from './form-validation-comp.component';

describe('FormValidationCompComponent', () => {
  let component: FormValidationCompComponent;
  let fixture: ComponentFixture<FormValidationCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
