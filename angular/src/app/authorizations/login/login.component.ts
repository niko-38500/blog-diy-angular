import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from '../../app.component';
import { AuthorizationsHttpService } from '../shared/services/authorizations-http.service';
import { LoginFormService } from './login-form.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form!: FormGroup;

    badCredentials: boolean = false;
    
    constructor(
        private matDialogRef: MatDialogRef<AppComponent>,
        private formService: LoginFormService,
        private authService: AuthorizationsHttpService
    ){}

    ngOnInit(){
        this.form = this.formService.get();
    }

    login() {
        const user = {
            "username": this.form.get('email')?.value,
            "password": this.form.get('password')?.value
        }

        this.authService.login(user).subscribe(response => {
            if (response) {
                this.badCredentials = false;
                this.closeDialog();
            } else {
                this.badCredentials = true;
            }
            
        });
    }

    closeDialog() {
        this.matDialogRef.close();
    }
}
