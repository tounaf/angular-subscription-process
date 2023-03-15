import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import { FormFactoryInterface } from "./FormFactoryInterface";

@Injectable({
    providedIn: 'root'
})
export class SubscriptionSettingFormFactory implements FormFactoryInterface {
    constructor(private _formBuilder: FormBuilder){}
    create() {
        return this._formBuilder.group({
            duration: ['', Validators.required],
            amount: ['', Validators.required]
        })
    }
}
