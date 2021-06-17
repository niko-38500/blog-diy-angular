import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { InputFieldComponent } from './input-field/input-field.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LatestArticlesComponent,
    SingInComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
