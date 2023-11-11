//Composant développé par Nicolás Pérez

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  constructor() {}

  emailError: boolean = false; // Indicateur d'erreur pour le champ email
  messageError: boolean = false; // Indicateur d'erreur pour le champ message

  email: string = '';
  message: string = '';

  // Méthode appelée lorsqu'on souhaite envoyer le message
  sendMessage() {
    // Vérifie si le champ email est vide
    if (this.email.trim() === '') {
      this.emailError = true; // Active l'indicateur d'erreur pour le champ email
      this.email = ''; // Réinitialise le champ email
    } else {
      this.emailError = false; // Désactive l'indicateur d'erreur pour le champ email
    }

    // Vérifie si le champ message est vide
    if (this.message.trim() === '') {
      this.messageError = true; // Active l'indicateur d'erreur pour le champ message
      this.message = ''; // Réinitialise le champ message
    } else {
      this.messageError = false; // Désactive l'indicateur d'erreur pour le champ message
    }

    // Si aucun des champs n'a d'erreur, affiche une alerte avec l'email et le message
    if (!this.emailError && !this.messageError) {
      alert('Email: ' + this.email + '\nMessage: ' + this.message);

      // Réinitialise les champs et les indicateurs d'erreur
      this.emailError = false;
      this.messageError = false;
      this.email = '';
      this.message = '';
    }
  }
}
