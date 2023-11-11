import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { user } from '../interfaces/users';
import { UsersModalComponent } from '../users-modal/users-modal.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
modalRef: NgbModalRef | null = null; //Ca c'est le machin truc avec plus d'infos
Users: Array<user> = []; // la variable qui stocke de la bdd bizarre
isLoading: boolean = false; //c pr dire ça charge ok? attends un peu

constructor(
  private usersService: UsersService,
  private modalService: NgbModal
) {}

open(index: number) {
  this.modalRef = this.modalService.open(UsersModalComponent);
  this.modalRef.componentInstance.users = this.Users[index];
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
}
}
