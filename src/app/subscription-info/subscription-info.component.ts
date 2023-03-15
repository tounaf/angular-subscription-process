import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subscription-info',
  templateUrl: './subscription-info.component.html',
  styleUrls: ['./subscription-info.component.scss']
})
export class SubscriptionInfoComponent implements OnInit {

  @Input('subscription') subscription: Subscription;
  @Input('total') total: number;
  constructor() { }

  ngOnInit() {
  }

}
