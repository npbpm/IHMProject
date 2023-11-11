//Composant déveleopée par Niama

import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { user } from '../interfaces/users';
@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.css'],
})
export class UsersModalComponent {
  constructor(public activeModal: NgbActiveModal) {}

  @Input() User: user = {
    id: 0,
    Username: 'Default',
    age: 0,
    email: 'none',
    number: 0,
  };
}
