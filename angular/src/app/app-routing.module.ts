import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { ContactComponent } from './contact/contact.component';

ContactComponent
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: SingInComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
