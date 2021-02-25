import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcontractComponent } from './detailcontract.component';

describe('DetailcontractComponent', () => {
  let component: DetailcontractComponent;
  let fixture: ComponentFixture<DetailcontractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcontractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
