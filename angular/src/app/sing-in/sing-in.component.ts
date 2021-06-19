import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sing-in',
    templateUrl: './sing-in.component.html',
    styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
    formProperty: any = [
        {
            type: 'text',
            label: 'Pseudo : ',
            name: 'pseudo',
            error: 'votre pseudo doit contenir au moins 5 caractere',
            validation: [
                Validators.required,
                Validators.minLength(5)
            ]
        },
        {
            type: 'email',
            label: 'Email : ',
            name: 'email',
            error: 'vous devez saisir une adresse email valide',
            validation: [
                Validators.required,
                Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
            ]
        },
        {
            type: 'password',
            label: 'Mot de passe : ',
            name: 'password',
            error: 'Votre mot de passe doit contenir au moins 8 caractere dont au moins 1 chiffre une majuscule et un caractere special',
            validation: [
                Validators.required,
                Validators.pattern(/^(?=.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)(?=.*\W)/)
            ]
        },
        {
            type: 'password',
            label: 'Confirmez mot de passe : ',
            name: 'passwordConfirm',
            error: 'votre mot de passe doit etre identique au champ precedent',
            validation: [
                Validators.required,
                Validators.pattern(/^(?=.{8,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)(?=.*\W)/)
            ]
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
