import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFilterFormComponent } from './order-filter-form.component';

describe('OrderFilterFormComponent', () => {
  let component: OrderFilterFormComponent;
  let fixture: ComponentFixture<OrderFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
