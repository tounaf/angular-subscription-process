import { I18NHtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionSettingFormFactory } from "../factory/SubscriptionSettingFormFactory";
import { ConfirmationFormFactory } from "../factory/ConfirmationFormFactory";
import { PaymentFormFactory } from "../factory/PaymentFormFactory";
import { SettingFormFactory } from "../factory/SettingFormFactory";

@Component({
  selector: 'app-subscription-process',
  templateUrl: './subscription-process.component.html',
  styleUrls: ['./subscription-process.component.scss']
})
export class SubscriptionProcessComponent implements OnInit {


  subscriptionPlans: SubscriptionPlan[] = [
    {
      duration_months: 3,
      price_usd_per_gb: 3
    },
    {
      duration_months: 6,
      price_usd_per_gb: 2.5
    },
    {
      duration_months: 12,
      price_usd_per_gb: 2
    }
  ];

  subscriptionsPlanSelected: ClientSubscription[] = [];
  payment: Payment = {
    cardNumber: 0,
    cardSecurityCode: 0,
    cardExpiration: '',
  }

  user: User = {email:''};
  clientSubscription: ClientSubscription = {
    amountGs: 0,
    amountPrice: 0,
    month: 0,
    unitPricePerGs: 0
  }
  
  subscription: Subscription = {
    clientSubscriptions: this.subscriptionsPlanSelected,
    upfront: '',
    payment: this.payment,
    user: this.user,
  };

  sumAmounts = 0;
  
  REMISE = 10;

  subscriptionStepFormGroup: FormGroup;

  paymentStepFormGroup: FormGroup;


  confirmationStepFormGroup: FormGroup;

  isLinear = true;


  settingsForm: FormGroup;


  constructor(
    private _settingFactory: SettingFormFactory,
    private _paymentFactory: PaymentFormFactory,
    private _confirmationFactory: ConfirmationFormFactory,
    private _subscriptionSettingFactory: SubscriptionSettingFormFactory,
    private _formBuilder: FormBuilder, 
  ) {
    this.subscriptionStepFormGroup = _subscriptionSettingFactory.create();
    this.confirmationStepFormGroup = _confirmationFactory.create();
    this.paymentStepFormGroup = _paymentFactory.create();
    this.settingsForm = _settingFactory.create();
   }

  ngOnInit(): void {
    this.addNewSubscription();
  }


  get subscriptions() {
    return this.settingsForm.controls["subscriptions"] as FormArray;
  }

  addNewSubscription() {

    const subscriptionStepForm: FormGroup = this._formBuilder.group({
      duration: ['', Validators.required],
      amount: ['', Validators.required]
    });

    this.subscriptions.push(subscriptionStepForm);
  }

  removeSubscription(lessonIndex: number) {
    this.subscriptions.removeAt(lessonIndex);
    this.onSubmitSettingForm();
  }

  onSubmitSettingForm() {

    this.subscriptionsPlanSelected = [];
    let sum = 0;
    this.settingsForm.value.subscriptions.forEach((i: any) => {
      let plan = {
        month: 0,
        unitPricePerGs :0,
        amountPrice: 0,
        amountGs: 0,
      } as ClientSubscription;

      plan.month = +i.duration;
      plan.amountGs = i.amount;
      plan.unitPricePerGs = this.subscriptionPlans.filter(index=>index.duration_months === +i.duration)[0].price_usd_per_gb;
      plan.amountPrice = plan.unitPricePerGs * plan.amountGs;
      sum += plan.amountPrice;
      this.subscriptionsPlanSelected.push(plan);

    });

    this.sumAmounts = sum;
    
    this.subscription.clientSubscriptions = this.subscriptionsPlanSelected;
    this.subscription.upfront = this.settingsForm.value.upfront;
    this.sumAmounts = this.subscription.upfront === 'yes' ? this.sumAmounts - this.sumAmounts / this.REMISE: this.sumAmounts;
    
  }

  onSubmitPaymentForm() {
    const payment = this.paymentStepFormGroup.value;
    this.payment.cardExpiration = payment.cardExpiration;
    this.payment.cardNumber = payment.cardNumber;
    this.payment.cardSecurityCode = payment.cardSecurityCode;
    this.subscription.payment = this.payment;
  }

  onSubmitConfirmationForm() {
    this.user.email = this.confirmationStepFormGroup.value.email;
    if(this.confirmationStepFormGroup.value.acceptTerm) {

    }

    this.subscription.user = this.user;
  }

}
