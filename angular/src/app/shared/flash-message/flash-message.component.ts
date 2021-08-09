import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlashService } from '../services/flash.service';

@Component({
    selector: 'ng-flash-message',
    templateUrl: './flash-message.component.html',
    styleUrls: ['./flash-message.component.scss']
})
export class FlashMessageComponent {

    @ViewChild('flash') flashBox: any;

    class: string = "";
    message: string = "";

    private flashSubscription: Subscription;

    constructor(
        private flashService: FlashService
    ) {
        this.flashSubscription = this.flashService.getUpdate().subscribe(message => {
            this.message = message.flashMessage;
            this.class = message.flashClass;
            setTimeout(() => {
                this.message = "";
                this.class = "";
            }, 5000);
        });
    }
}
