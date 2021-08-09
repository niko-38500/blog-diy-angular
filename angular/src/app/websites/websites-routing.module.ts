import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebsiteComponent } from './website/website.component';
import { WebsitesComponent } from './websites.component';

const routes: Routes = [
    {
        path: '', 
        component: WebsitesComponent,
        children: [
            {
                path: '',
                component: WebsiteComponent,
                data: {
                    title: 'Home - I did it'
                }
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsitesRoutingModule { }