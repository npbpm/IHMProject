//Composant développé par Nicolás Pérez

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { product } from '../interfaces/product';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  modalRef: NgbModalRef | null = null;
  products: Array<product> = [];
  isLoading: boolean = false;

  constructor(
    private productService: ProductsService,
    private modalService: NgbModal
  ) {}

  open(index: number) {
    this.modalRef = this.modalService.open(ProductModalComponent);

    this.modalRef.componentInstance.product = this.products[index];
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.retrieveProducts();
  }

  retrieveProducts = () => {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.isLoading = false;
    });
  };
}
