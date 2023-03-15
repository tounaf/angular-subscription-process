import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import { FormFactoryInterface } from "./FormFactoryInterface";

@Injectable({
    providedIn: 'root'
})
export class SettingFormFactory implements FormFactoryInterface {
    constructor(private _formBuilder: FormBuilder){}
    create() {
        return this._formBuilder.group({
            upfront: ['no', Validators.required],
            subscriptions: this._formBuilder.array([])
        })
    }
}
