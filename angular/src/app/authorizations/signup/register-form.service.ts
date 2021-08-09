import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { areEqualsValidator } from '../shared/validators/are-equals-validator.directive';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {

  constructor(
    private fb: FormBuilder
  ) { }

  get() : FormGroup {
    return this.fb.group(
      {
        pseudo: [
          '', 
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(15)
          ]
        ],
        email: [
          '', 
          [
            Validators.required,
            Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
          ]
        ],
        password: [
          '', 
          [
            Validators.required,
            Validators.pattern(/^(?=.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)(?=.*\W)/)
          ]
        ],
        confirm: [
          '', 
          Validators.required
        ]
      },
      {
        validators: areEqualsValidator
      }
    )
  }


}
