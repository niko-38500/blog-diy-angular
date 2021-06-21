import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SingInComponent } from './sing-in/sing-in.component';

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

    constructor(
        private dialog: MatDialog
    ) {}

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

    openDialog() {
        const dialogRef = this.dialog.open(SingInComponent, {
            backdropClass: "modal-dialog",
            width: "85%",
            minHeight: "23em"
        });
    }

    toggleMenu(): void {
        let target: any = this.menuBtn.nativeElement;
        let nav: any = this.sidebar.nativeElement;
        let navBg: any = this.sidebarBg.nativeElement;
        target.classList.toggle("change");
        nav.classList.toggle("translate");
        navBg.classList.toggle("translate");
        document.body.classList.toggle('disable-scroll');
    }
}
