import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCompComponent } from './directive-comp.component';

describe('DirectiveCompComponent', () => {
  let component: DirectiveCompComponent;
  let fixture: ComponentFixture<DirectiveCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
