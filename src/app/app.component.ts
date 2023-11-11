//Composant développé par Nicolás Pérez

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isNavbarOpen: boolean = false;

  //Méthode permettant de dérouler la navbar, elle s'applique uniquement à des écrans petit
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
