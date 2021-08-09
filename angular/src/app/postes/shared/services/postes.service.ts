import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HTTPMessageService } from 'src/app/shared/services/http-message.service';
import { Post } from '../models/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostesService {

    private postUrl = "https://localhost:8000/api/postes";

    httpHeader = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        })
    };

    constructor(
        private http: HttpClient,
        private messageService: HTTPMessageService
    ) { }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
    */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for post consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        this.messageService.add(`PostesService: ${message}`);
    }

    add(post: Post): Observable<Post> {
        return this.http.post<Post>(this.postUrl, post, this.httpHeader)
            .pipe(
                tap((newPost: Post) => this.log(`added post w/ id=${newPost.id}`)),
                catchError(
                    this.handleError<Post>('add')
                )
            )
    }

    findPostBySlug(slug: string|null): Observable<Post> {
        return this.http.get<Post>('https://localhost:8000/api/post/' + slug, this.httpHeader).pipe(
            catchError(
                this.handleError<Post>('findPostBySlug')
            )
        )
    }

    findLatestPostes(): Observable<Post> {
        return this.http.get<Post>(this.postUrl + "/latest", this.httpHeader).pipe(
            catchError(
                this.handleError<Post>('findPostBySlug')
            )
        )
    }
}
