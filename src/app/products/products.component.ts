import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { product } from '../interfaces/product';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  modalRef: NgbModalRef | null = null;
  products: Array<product> = [];

  constructor(
    private productService: ProductsService,
    private modalService: NgbModal
  ) {}

  open(index: number) {
    this.modalRef = this.modalService.open(ProductModalComponent);

    this.modalRef.componentInstance.product = this.products[index];
  }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts = () => {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  };
}
