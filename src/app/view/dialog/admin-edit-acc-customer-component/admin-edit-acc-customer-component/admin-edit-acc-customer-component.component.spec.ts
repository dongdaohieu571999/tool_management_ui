import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditAccCustomerComponentComponent } from './admin-edit-acc-customer-component.component';

describe('AdminEditAccCustomerComponentComponent', () => {
  let component: AdminEditAccCustomerComponentComponent;
  let fixture: ComponentFixture<AdminEditAccCustomerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditAccCustomerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditAccCustomerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
