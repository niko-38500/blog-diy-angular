// import { HttpClient, HttpXhrBackend } from "@angular/common/http";
// import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export const alreadyExistsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
//     let instance: HttpClient|null;
//     if (instance === null) {
//         instance = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
//     }
//     const password = control.get('password');
//     const passwordConfirm = control.get('passwordConfirm');
    
//     return password?.value === passwordConfirm?.value ? null : { areEquals: true };
// };

import { Input } from '@angular/core';
import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: '[appAreEqualsValidatorDirective]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: AlreadyExistsValidatorDirective,
        multi: true
    }]
})
export class AlreadyExistsValidatorDirective implements Validator {

    @Input("alreadyExist") alreadyExist = "";

    validate(control: AbstractControl): ValidationErrors | null {
        // return this.alreadyExist ?  : null
    }
}