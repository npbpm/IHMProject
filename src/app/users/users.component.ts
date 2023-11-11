//Composant crée par Niama Amtoun

import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { user } from '../interfaces/users';
import { UsersModalComponent } from '../users-modal/users-modal.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  modalRef: NgbModalRef | null = null;
  Users: Array<user> = []; // la variable qui stocke notre bdd json
  isLoading: boolean = false; //Pour envoyer un message de chargement

  constructor(
    private usersService: UsersService,
    private modalService: NgbModal
  ) {}

  open(index: number) {
    this.modalRef = this.modalService.open(UsersModalComponent);
    this.modalRef.componentInstance.User = this.Users[index];
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.retrieveUsers();
  }

  retrieveUsers = () => {
    this.usersService.getUsers().subscribe((data) => {
      this.Users = data;
      this.isLoading = false;
    });
  };
}
