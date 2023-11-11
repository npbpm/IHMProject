//Composant crée par Niama Amtoun

import { Component, OnInit } from '@angular/core';
import { Orders } from '../interfaces/Orders';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { OrdersService } from '../orders.service';
import { OrdersModalComponent } from '../orders-modal/orders-modal.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  modalRef: NgbModalRef | null = null;
  Orders: Array<Orders> = [];
  isLoading: boolean = false;

  constructor(
    private OrdersService: OrdersService,
    private modalService: NgbModal
  ) {}

  open(index: number) {
    this.modalRef = this.modalService.open(OrdersModalComponent);
    this.modalRef.componentInstance.Orders = this.Orders[index];
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.retrieveOrders();
  }

  retrieveOrders = () => {
    this.OrdersService.getOrders().subscribe((data) => {
      this.Orders = data;
      this.isLoading = false;
    });
  };
}
