import { Component, Input } from '@angular/core';
import { Orders } from '../interfaces/Orders';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-orders-modal',
  templateUrl: './orders-modal.component.html',
  styleUrls: ['./orders-modal.component.css']
})
export class OrdersModalComponent {
  constructor(public activeModal: NgbActiveModal) {}

  @Input() Orders: Orders  = {
    id: 0,
    Username: 'Default',
    Product: 'none',
    quantity: 0,
    feedback:'none',
  };
}
