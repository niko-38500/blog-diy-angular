import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { HTTPMessageService } from 'src/app/shared/services/http-message.service';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationsHttpService {

    httpHeader = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        })
    };

    constructor(
        private http: HttpClient,
        private messageService: HTTPMessageService,
        private user: UserService
    ) { }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
    */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    private log(message: string) {
        this.messageService.add(`AuthorizationsService: ${message}`);
    }

    register(user: User): Observable<User> {
        return this.http.post<User>(environment.api.authorizations.register , user, this.httpHeader)
            .pipe(
                tap((newUser: User) => this.log(`added user w/ id=${newUser.pseudo}`)),
                catchError(
                    this.handleError<User>('register')
                )
            )
    }

    login(user: {}): Observable<User> {
        return this.http.post<User>(environment.api.authorizations.login , user, this.httpHeader).pipe(
            tap((data: User) => this.user.set(data)),
            catchError(
                this.handleError<User>('login')
            )
        );
    }
}
