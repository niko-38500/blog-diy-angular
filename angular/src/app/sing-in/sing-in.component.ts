import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-sing-in',
    templateUrl: './sing-in.component.html',
    styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
    form = new FormControl();

    constructor() { }

    ngOnInit(): void {
    }

    onChange(e: any): void {
        console.log(e.target.value);
    }

}
