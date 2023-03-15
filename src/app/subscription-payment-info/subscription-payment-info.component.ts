import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subscription-payment-info',
  templateUrl: './subscription-payment-info.component.html',
  styleUrls: ['./subscription-payment-info.component.scss']
})
export class SubscriptionPaymentInfoComponent implements OnInit {
  @Input('payment') payment: Payment;
  constructor() { }

  ngOnInit() {
  }

}
