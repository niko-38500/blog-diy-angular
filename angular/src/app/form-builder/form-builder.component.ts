import { EventEmitter, Input, Output, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

    @Output() newEvent = new EventEmitter<any>();

    @Input() group: {
        type: string,
        label: string,
        name: string,
        error: string,
        validation: any[]
    }[] = [];

    @Input() validationGroup: any;

    @Input() submitLabel: string = "";

    public form: FormGroup = new FormGroup({});

    constructor() {}

    ngOnInit(): void {
        let formGroup: any = {};
        
        this.group.forEach((value) => {
            if (value.type === 'submit') {
                return;
            }
            formGroup[value.name] = new FormControl('', value.validation);
        })
        // let val = this[this.validationGroup as keyof this]
        this.form = new FormGroup(formGroup, this.validationGroup);
    }

    get passwordConfirm() {
        return this.form.get('passwordConfirm');
    }

    hasErrors(input: any): any {
        for (let field of this.group) {
            if(field.name === input) {
                if (this.form.controls[input].errors) {
                   if (!this.form.controls[input].errors?.required) {
                       return true;
                   }
                }
            }
        }

        return false
        
    }

    onSubmit(e: any): void {
        if (this.form.valid) {
            this.newEvent.emit(e);
        }
    }
}
