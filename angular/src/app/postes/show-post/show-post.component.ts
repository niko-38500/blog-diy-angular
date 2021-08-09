import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../../comment.service';
import { Post } from '../shared/models/post.model';
import { PostesService } from '../shared/services/postes.service';

@Component({
    selector: 'app-show-post',
    templateUrl: './show-post.component.html',
    styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {

    post: Post = <Post>{};

    formBuilding : any = [
        {
            type: 'textarea',
            label: 'Répondre : ',
            name: 'content',
            validation: [
                Validators.required
            ]
        }
    ];

    constructor(
        private route: ActivatedRoute,
        private postService: PostesService,
        private commentService: CommentService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.postService.findPostBySlug(this.route.snapshot.paramMap.get('slug')).subscribe((post: Post) => {
            this.post = post;
        });
    }

    onSubmit(e: any) {
        let inputValues: any = {
            author: 'api/users/31',
            post: "api/postes/" + this.post.id,
            content: e.target['content'].value
        };
        this.commentService.add(inputValues).subscribe()
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
    }

}
