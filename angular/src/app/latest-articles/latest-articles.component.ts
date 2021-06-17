import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-latest-articles',
    templateUrl: './latest-articles.component.html',
    styleUrls: ['./latest-articles.component.scss']
})
export class LatestArticlesComponent implements OnInit {
    @ViewChild('hzScrollDiv') div: any;
    articles: {
        h1: string,
        content: string,
        author: string
    }[] = [
        {
            h1: 'titre',
            content: "lorem ipsum dolor sit amet",
            author: "niko"
        },
        {
            h1: 'titre',
            content: "lorem ipsum dolor sit amet",
            author: "niko"
        },
        {
            h1: 'titre',
            content: "lorem ipsum dolor sit amet",
            author: "niko"
        },
        {
            h1: 'titre',
            content: "lorem ipsum dolor sit amet",
            author: "niko"
        }
    ];

    constructor() { }

    ngOnInit(): void {
        
    }

    scrollHorizontally (e: any): void {
        // e = window.event || e;
        // let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        // let hzScrollDiv: any = this.div.nativeElement.scrollLeft
        // hzScrollDiv.scrollLeft -= (delta * 100);
        // e.preventDefault();
    }

}
