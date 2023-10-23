//Composant développé par Nicolás Pérez

import { Component, Input } from '@angular/core';
import { product } from '../interfaces/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent {
  constructor(public activeModal: NgbActiveModal) {}

  @Input() product: product = {
    id: 0,
    name: 'Default',
    price: 0,
    description: 'none',
    image: '',
  };
}
