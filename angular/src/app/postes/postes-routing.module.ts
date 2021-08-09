import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserGuard } from '../core/guards/user.guard';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostesComponent } from './postes.component';
import { ShowPostComponent } from './show-post/show-post.component';

const routes: Routes = [
    {
        path: '',
        component: PostesComponent,
        children: [
            {
                path: 'add/:id', 
                component: NewPostComponent,
                data: {
                    title: 'Crée un poste - I did it'
                }
            },
            {
                path: 'show/:slug', 
                component: ShowPostComponent,
                data: {
                    title: 'poste - I did it'
                }
            },
            {
                path: '', 
                component: PostListComponent,
                data: {
                    title: 'Crée un poste - I did it'
                }
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostesRoutingModule { }