// import { Directive } from '@angular/core';
// import { AbstractControl, ValidationErrors, NG_VALIDATORS, ValidatorFn, Validators } from "@angular/forms";

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// @Directive({
//     selector: '[appAreEqualsValidatorDirective]',
//     providers: [{
//         provide: NG_VALIDATORS,
//         useExisting: AreEqualsValidatorDirective,
//         multi: true
//     }]
// })
// export class AreEqualsValidatorDirective implements Validators {

//     validate(control: AbstractControl): ValidationErrors | null {
//         return areEqualsValidator(control)
//     }

// }

export const areEqualsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const passwordConfirm = control.get('passwordConfirm');
    console.log(password);
    // if (password?.value === passwordConfirm?.value) {}
    
  
    return password?.value === passwordConfirm?.value ? null : { areEquals: true };
};