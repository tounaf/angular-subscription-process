import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import { FormFactoryInterface } from "./FormFactoryInterface";

@Injectable({
    providedIn: 'root'
})
export class PaymentFormFactory implements FormFactoryInterface {
    constructor(private _formBuilder: FormBuilder){}
    create() {
        return this._formBuilder.group({
            cardExpiration: ['', Validators.required],
            cardNumber: ['', Validators.required],
            cardSecurityCode: ['', Validators.required]
        })
    }
}
