import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPaymentDetailComponent } from './get-payment-detail.component';

describe('GetPaymentDetailComponent', () => {
  let component: GetPaymentDetailComponent;
  let fixture: ComponentFixture<GetPaymentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPaymentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPaymentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
