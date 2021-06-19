import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sing-in',
    templateUrl: './sing-in.component.html',
    styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
    form = new FormControl();
    formProperty: any = [
        {
            formControl: "pseudo",
            type: 'text',
            label: 'Pseudo : ',
            name: 'lastname'
        },
        {
            formControl: "email",
            type: 'email',
            label: 'Email : ',
            name: 'email'
        },
        {
            formControl: "password",
            type: 'password',
            label: 'Mot de passe : ',
            name: 'password'
        },
        {
            formControl: "passwordConfirm",
            type: 'password',
            label: 'Confirmez mot de passe : ',
            name: 'passwordConfirm'
        }
    ]

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit(e: any): void {
        let inputValues: string[] = [];
        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].type !== 'submit'){
                inputValues.push(e.target[i].value);
            }
        }
        console.log(inputValues);
        
    }

}
