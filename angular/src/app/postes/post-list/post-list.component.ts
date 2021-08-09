import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Post } from '../shared/models/post.model';
import { uc_first } from '../../shared/uc_first';
import { UserService } from '../../core/services/user.service';
import { FlashService } from 'src/app/shared/services/flash.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    @ViewChild('categoryDialog') tempalteDialog: any;

    select: string = "";

    category: {
        id: number,
        name: string,
        slug: string
    }[] = [];

    articles: Post[] = [];

    constructor(
        private dialog: MatDialog,
        private router: Router,
        private http: HttpClient,
        private userService: UserService,
        private flashService: FlashService
    ) { }

    ngOnInit() {
        this.http.get('https://127.0.0.1:8000/api/categories?page=1').subscribe((data: any) => {
            this.category = data["hydra:member"]; 
        });

        this.http.get('https://127.0.0.1:8000/api/postes?page=1').subscribe((data: any) => {
            this.articles = data["hydra:member"];
        });
    }

    // getCategoryName(occurence: any): any {
    //     console.log(occurence.category_id.name)
    // }

    chooseCategory(): void {
        if (this.userService.has()) {
            const dialogCategory = this.dialog.open(this.tempalteDialog, {
                backdropClass: "modal-dialog",
                width: "85%",
                minHeight: "23em"
            });
        } else {
            this.flashService.sendUpdate("Veuillez vous authentifier pour poster un nouveau sujet", 'flash-danger');
        }
    }

    newPost(): void {
        if (this.select !== "") {
            console.log(this.select);
            this.dialog.closeAll();
            this.router.navigate(['/postes/add', this.select]);
        }
    }

    uc_first(text: string): string {
        return uc_first(text);
    }

}