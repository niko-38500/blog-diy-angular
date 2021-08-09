import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationsComponent } from './authorizations.component';
import { SharedModule } from '../shared/shared.module';
import { AuthorizationsRoutingModule } from './authorizations-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AuthorizationsComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthorizationsRoutingModule,
    SharedModule
  ]
})
export class AuthorizationsModule { }
