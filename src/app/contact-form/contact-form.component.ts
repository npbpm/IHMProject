import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  constructor() {}

  emailError: boolean = false;
  messageError: boolean = false;

  email: string = '';
  message: string = '';

  sendMessage() {
    if (this.email.trim() === '') {
      this.emailError = true;
      this.email = '';
    } else {
      this.emailError = false;
    }

    if (this.message.trim() === '') {
      this.messageError = true;
      this.message = '';
    } else {
      this.messageError = false;
    }

    if (!this.emailError && !this.messageError) {
      alert('Email: ' + this.email + '\nMessage: ' + this.message);
      this.emailError = false;
      this.messageError = false;
      this.email = '';
      this.message = '';
    }
  }
}
