import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './members/contact/contact.component';
import { UserGuard } from './core/guards/user.guard';

ContactComponent
const routes: Routes = [
    { 
        path: '',
        loadChildren: () => import('./websites/websites.module').then(m => m.WebsitesModule)
    },
    { 
        path: '', 
        loadChildren: () => import('./authorizations/authorizations.module').then(m => m.AuthorizationsModule)
    },
    { 
        path: 'contact', 
        component: ContactComponent 
    },
    {
        path: 'postes', 
        loadChildren: () => import('./postes/postes.module').then(m => m.PostesModule)
    },
    {
        path: '',
        loadChildren: () => import('./members/members.module').then(m => m.MembersModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
