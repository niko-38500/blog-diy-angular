import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NewPostFormService {

  constructor(
    private fb: FormBuilder
  ) { }

  get(): FormGroup {
    return this.fb.group({
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

}
