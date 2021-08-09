import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashService } from '../../shared/services/flash.service';
import { PostesService } from '../shared/services/postes.service';
import { slugify } from '../../shared/slugify';
import { NewPostFormService } from './new-post-form.service';
import { FormGroup } from '@angular/forms';
import { Post } from '../shared/models/post.model';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/models/user.model';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

    category: string|null = '';
    form!: FormGroup;
    user?: User;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private postService: PostesService,
        private flashService: FlashService,
        private formService: NewPostFormService,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.category = this.route.snapshot.paramMap.get('id');
        this.form = this.formService.get();
        this.user = this.userService.get();
    }

    onSubmit() {

        let post: Post = {
            "title": this.form.get('subject')?.value,
            "content": this.form.get('message')?.value,
            "slug": slugify(this.form.get('subject')?.value),
            "category": "api/category/" + this.category,
            "author": "api/users/" + this.user?.id
        }
        

        this.postService.add(post).subscribe((data: any) => {
            this.router.navigate(['/postes/show' + data.slug])
            this.flashService.sendUpdate('votre poste à bien ete crée !', 'flash-success');
        });
    }
}
