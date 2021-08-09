import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { MembersComponent } from './members.component';
import { MembersRoutingModule } from './members-routing.module';



@NgModule({
  declarations: [
    MembersComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
