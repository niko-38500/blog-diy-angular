import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const areEqualsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors|null => {
    const password = control.get('password');
    const passwordConfirm = control.get('confirm');
    return password?.value === passwordConfirm?.value ? null : { areEquals: true };
};