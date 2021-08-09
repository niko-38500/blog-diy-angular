import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Comment } from './comment';
import { HTTPMessageService } from './shared/services/http-message.service';
import { Post } from './postes/shared/models/post.model';

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    private commentUrl = "https://localhost:8000/api/comments";

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
        this.messageService.add(`CommentService: ${message}`);
    }

    add(comment: Comment): Observable<Comment> {
        return this.http.post<Comment>(this.commentUrl, comment, this.httpHeader)
            .pipe(
                tap((newComment: Comment) => this.log(`added comment w/ id=${newComment.id}`)),
                catchError(
                    this.handleError<Comment>('add')
                )
            )
    }

    findCommentById(commentId: string|null): Observable<Comment> {
        return this.http.get<Comment>(this.commentUrl + '/' + commentId, this.httpHeader).pipe(
            catchError(
                this.handleError<Comment>('findCommentById')
            )
        )
    }

    findByPost(): Observable<Comment> {
        return this.http.get<Comment>(this.commentUrl + '?page=1', this.httpHeader).pipe(
            catchError(
                this.handleError<Comment>('findCommentById')
            )
        )
    }
}