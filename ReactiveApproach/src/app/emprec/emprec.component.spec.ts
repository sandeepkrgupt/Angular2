import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprecComponent } from './emprec.component';

describe('EmprecComponent', () => {
  let component: EmprecComponent;
  let fixture: ComponentFixture<EmprecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
