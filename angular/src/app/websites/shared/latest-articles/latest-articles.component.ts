import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/postes/shared/models/post.model';
import { PostesService } from 'src/app/postes/shared/services/postes.service';

@Component({
    selector: 'app-latest-articles',
    templateUrl: './latest-articles.component.html',
    styleUrls: ['./latest-articles.component.scss']
})
export class LatestArticlesComponent implements OnInit {
    @ViewChild('hzScrollDiv') div: any;

    latestPostes: Post[] = [];

    constructor(
        private postService: PostesService
    ) { }

    ngOnInit(): void {
        this.postService.findLatestPostes().subscribe((data: any) => {
            this.latestPostes = data['hydra:member']
        })
    }

    strLimit(str: string, limit: number) {
        str.substring(0, limit);
    }

    scrollHorizontally (e: any): void {
        // TODO //
        // add this function when coding the desktop version
        // e = window.event || e;
        // let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        // let hzScrollDiv: any = this.div.nativeElement.scrollLeft
        // hzScrollDiv.scrollLeft -= (delta * 100);
        // e.preventDefault();
    }

}
