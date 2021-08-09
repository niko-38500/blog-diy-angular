import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { LoginComponent } from './authorizations/login/login.component';
import { User } from './core/models/user.model';
import { UserService } from './core/services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('nav') sidebar: any;
    @ViewChild('navBg') sidebarBg: any;
    @ViewChild('menuBtn') menuBtn: any;
    @ViewChild('header') header: any;

    userSubscriptions!: Subscription;
    user?: User;

    constructor(
        private dialog: MatDialog,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.userSubscriptions = this.userService.userSubject.subscribe(user => {
            this.user = user;
        });
        this.userService.emmitUser();
    }

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

    test() {
        // this.http.get("https://localhost:8000/api/me", {
        //     headers: {
        //         'Accept': 'application/json', 
        //         'Cookie': 'PHPSESSID'
        //     }
        // }).subscribe(response => console.log(response))
        // this.userSubscriptions = this.userService.remove().subscribe()
    }

    logout() {
        this.userService.remove();
        window.location.reload();
    }

    openDialog() {
        const dialogRef = this.dialog.open(LoginComponent, {
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
