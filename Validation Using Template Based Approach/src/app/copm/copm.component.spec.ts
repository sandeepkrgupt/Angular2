import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopmComponent } from './copm.component';

describe('CopmComponent', () => {
  let component: CopmComponent;
  let fixture: ComponentFixture<CopmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
