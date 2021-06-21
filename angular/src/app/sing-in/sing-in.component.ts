import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-sing-in',
    templateUrl: './sing-in.component.html',
    styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

    formBuilding: any = [
        {
            type: 'text',
            label: 'Email : ',
            name: 'email',
            validation: [
                Validators.required
            ]
        },
        {
            type: 'password',
            label: 'Mot de passe : ',
            name: 'password',
            validation: [
                Validators.required
            ]
        }
    ];

    credentialsOk: boolean = false;
    
    constructor(
        private matDialogRef: MatDialogRef<AppComponent>
    ){}

    onSubmit(e: any) {
        let inputValues: string[] = [];
        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].type !== 'submit') {
                inputValues.push(e.target[i].value);
            }
        }
        console.log(inputValues);

        this.closeDialog();
    }

    closeDialog() {
        this.matDialogRef.close();
    }

    ngOnInit(){}
}
