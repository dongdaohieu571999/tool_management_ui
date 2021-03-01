import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddAccCustomerComponent } from './admin-add-acc-customer.component';

describe('AdminAddAccCustomerComponent', () => {
  let component: AdminAddAccCustomerComponent;
  let fixture: ComponentFixture<AdminAddAccCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddAccCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddAccCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
