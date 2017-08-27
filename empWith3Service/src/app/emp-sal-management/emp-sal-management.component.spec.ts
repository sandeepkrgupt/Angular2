import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSalManagementComponent } from './emp-sal-management.component';

describe('EmpSalManagementComponent', () => {
  let component: EmpSalManagementComponent;
  let fixture: ComponentFixture<EmpSalManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpSalManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSalManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
