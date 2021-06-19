import { EventEmitter, Input, Output, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

    @Output() newEvent = new EventEmitter<any>();

    @Input() group: {
        formControl: string,
        type: string,
        label: string,
        name: string
    }[] = [];

    @Input() submitLabel: string = "";

    public form: FormGroup = new FormGroup({});

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        let formGroup: any = {};
        
        this.group.forEach((value) => {
            if (value.type === 'submit') {
                return;
            }
            formGroup[value.formControl] = new FormControl
        })
        this.form = new FormGroup(formGroup);
    }

    getFormControlName(): any {
    }

    onSubmit(e: any): void {
        this.newEvent.emit(e);
    }
}
