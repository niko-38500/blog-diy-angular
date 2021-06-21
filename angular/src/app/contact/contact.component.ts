import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { init } from 'emailjs-com';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

@ViewChild('mainDiv') mainDiv: any;
@ViewChild('mainId') mainId: any;
@ViewChild('nameId') nameId: any;
@ViewChild('firstNameId') firstNameId: any;
@ViewChild('emailId') emailId: any;
@ViewChild('messageId') messageId: any;

  constructor() {

  }

  public sendEmail(e: Event) {
    let inputName = this.nameId.nativeElement.value
    let inputFirstName = this.firstNameId.nativeElement.value
    let inputEmail = this.emailId.nativeElement.value
    let inputMessage = this.messageId.nativeElement.value
    

    if (inputName != "" && inputFirstName != "" && inputEmail != "" && inputMessage != "") {
      e.preventDefault();
      emailjs.sendForm('service_5eco55o', 'template_nzzxk1m', e.target as HTMLFormElement, 'user_hQ9s3Jlerp98jPTfI2TTm')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        
        this.hideDiv()
        this.createMessage()
    } else if (inputName === "" && inputFirstName === "" && inputEmail === "" && inputMessage === "") {
      alert('veuilez remplir tous les champs')
    }

    
  }

   
  public hideDiv() {
    
    let mainDiv = this.mainDiv.nativeElement
    mainDiv.hidden = true
    
  }
  
  public createMessage() {

    

    
   
    
    
  }


  ngOnInit(): void {
    
  }

}


