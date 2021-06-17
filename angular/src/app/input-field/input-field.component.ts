import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

    @Input() type = '';
    @Input() value = '';
    @Input() label = '';
    @Input() name = '';
    @Output() newEvent = new EventEmitter<any>();
    form = new FormControl();

    constructor() { }

    ngOnInit(): void {
    }

    onChange(e: any): void {
        this.newEvent.emit(e)
    }

}
