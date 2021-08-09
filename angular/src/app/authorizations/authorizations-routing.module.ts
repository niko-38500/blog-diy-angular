import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { AuthorizationsComponent } from './authorizations.component';
import { UserGuard } from '../core/guards/user.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: AuthorizationsComponent,
        children: [
            {
                path: 'signup', 
                component: SignupComponent,
                data: {
                    title: 'Inscription - I did it'
                },
                canActivate: [UserGuard]
            },
            {
                path: 'login', 
                component: LoginComponent,
                data: {
                    title: 'Login - I did it'
                },
                canActivate: [UserGuard]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationsRoutingModule { }