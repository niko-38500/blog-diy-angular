import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPostComponent } from './show-post/show-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostesRoutingModule } from './postes-routing.module';
import { PostesComponent } from './postes.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ShowPostComponent,
    PostListComponent,
    NewPostComponent,
    PostesComponent
  ],
  imports: [
    CommonModule,
    PostesRoutingModule,
    SharedModule
  ]
})
export class PostesModule { }
