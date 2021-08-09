import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserGuard } from '../core/guards/user.guard';
import { AccountComponent } from './account/account.component';
import { MembersComponent } from './members.component';

const routes: Routes = [
    {
        path: '',
        component: MembersComponent,
        children: [
            {
                path: 'account', 
                component: AccountComponent,
                data: {
                    title: 'Mon compte - I did it'
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
export class MembersRoutingModule { }