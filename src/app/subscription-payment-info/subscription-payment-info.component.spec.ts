import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPaymentInfoComponent } from './subscription-payment-info.component';

describe('SubscriptionPaymentInfoComponent', () => {
  let component: SubscriptionPaymentInfoComponent;
  let fixture: ComponentFixture<SubscriptionPaymentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionPaymentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionPaymentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
