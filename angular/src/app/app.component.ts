import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('nav') sidebar: any;
    @ViewChild('navBg') sidebarBg: any;
    @ViewChild('menuBtn') menuBtn: any;
    @ViewChild('header') header: any;

    ngAfterViewInit(): void {
        let prevScrollpos: any = window.pageYOffset;
        let header: any = this.header.nativeElement;

        window.addEventListener("scroll", () => {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                header.style.top = "0";
            } else {
                header.style.top = "-13em";
            }
            prevScrollpos = currentScrollPos;
        });


    }

    toggleMenu(): void {
        let target: any = this.menuBtn.nativeElement;
        let nav: any = this.sidebar.nativeElement;
        let navBg: any = this.sidebarBg.nativeElement;
        target.classList.toggle("change");
        nav.classList.toggle("translate");
        navBg.classList.toggle("translate");
    }
}
