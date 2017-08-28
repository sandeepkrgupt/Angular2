import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProductsComponent } from './add-new-products.component';

describe('AddNewProductsComponent', () => {
  let component: AddNewProductsComponent;
  let fixture: ComponentFixture<AddNewProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
