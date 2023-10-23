//Composant développé par Nicolás Pérez

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}

  redirect() {
    window.open('https://github.com/npbpm/IHMProject', '_blank');
  }
}
