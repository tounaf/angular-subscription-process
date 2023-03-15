import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import { FormFactoryInterface } from "./FormFactoryInterface";

@Injectable({
    providedIn: 'root'
})
export class ConfirmationFormFactory implements FormFactoryInterface {
    constructor(private _formBuilder: FormBuilder){}
    create() {
        return this._formBuilder.group({
            email: ['', Validators.required],
            acceptTerm: ['', Validators.required],
        })
    }
}
