import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCompComponent } from './search-comp.component';

describe('SearchCompComponent', () => {
  let component: SearchCompComponent;
  let fixture: ComponentFixture<SearchCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
