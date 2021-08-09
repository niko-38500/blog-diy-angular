import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { FlashService } from '../../shared/services/flash.service';
import { RegisterFormService } from './register-form.service';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { AuthorizationsHttpService } from '../shared/services/authorizations-http.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    public form!: FormGroup;

    constructor(
        private router: Router,
        private authService: AuthorizationsHttpService,
        private flashService: FlashService,
        private formService: RegisterFormService,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.form = this.formService.get();
        console.log(this.userService.get());
    }

    register(): void {
        
        let pseudo = this.form.get("pseudo")?.value;
        let email = this.form.get("email")?.value;
        let password = this.form.get("password")?.value;

        let user: User = {
            "pseudo": pseudo,
            "email": email,
            "password": password
        }

        this.authService.register(user).subscribe((res) => {
            if (res) {
                this.flashService.sendUpdate("votre compte à bien été crée vous allez recevoir un email de confirmation", 'flash-success');
                this.router.navigate([''])
            }
        });
    }
}
