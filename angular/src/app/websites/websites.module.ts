import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsitesComponent } from './websites.component';
import { WebsiteComponent } from './website/website.component';
import { LatestArticlesComponent } from './shared/latest-articles/latest-articles.component';
import { SharedModule } from '../shared/shared.module';
import { WebsitesRoutingModule } from './websites-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebsitesHttpInterceptor } from './shared/interceptors/websites-http.interceptor';



@NgModule({
    declarations: [
        WebsitesComponent,
        WebsiteComponent,
        LatestArticlesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        WebsitesRoutingModule
    ],
    providers: [
        { 
            provide: HTTP_INTERCEPTORS, 
            useClass: WebsitesHttpInterceptor, 
            multi: true 
        }
    ]
})
export class WebsitesModule { }
