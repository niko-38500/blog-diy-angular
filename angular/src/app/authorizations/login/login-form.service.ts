import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class LoginFormService {

    constructor(
        private fb: FormBuilder
    ) { }

    get(): FormGroup {
        return this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
}
