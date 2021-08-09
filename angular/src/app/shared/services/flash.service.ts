import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlashService {
    private flashMessage = new Subject<any>(); //need to create a subject

    sendUpdate(flashMessage: string, flashClass: string ) {
        this.flashMessage.next({ flashMessage: flashMessage, flashClass: flashClass });
    }

    getUpdate(): Observable<any> {
        return this.flashMessage.asObservable();
    }
}