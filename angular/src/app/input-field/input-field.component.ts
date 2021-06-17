import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

    type: string = '';
    value: string = '';
    label: string = '';
    name: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(e: any): void {
        console.log('logger');
        
    }

}
