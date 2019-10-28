import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTrasklistingComponent } from './product-trasklisting.component';

describe('ProductTrasklistingComponent', () => {
  let component: ProductTrasklistingComponent;
  let fixture: ComponentFixture<ProductTrasklistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTrasklistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTrasklistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
