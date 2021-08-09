import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private user?: User;
    userSubject = new Subject<User>();

    constructor() {
        const user = window.localStorage.getItem(environment.storage.user);
        if (user) {
            this.user = JSON.parse(user);
        }
    }

    emmitUser() {
        this.userSubject.next(this.user);
    }

    has(): boolean {
        return !!this.user;
    }

    get(): User|undefined {
        return this.user;
    }

    set(user: User): void {
        this.user = user;
        const storage = window.localStorage.setItem(
            environment.storage.user, 
            JSON.stringify(this.user)
        );
        this.emmitUser();
    }

    remove(): void {
        this.user = undefined;
        window.localStorage.removeItem(environment.storage.user);
        this.emmitUser();
    }
}
