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
  products: Array<product> = []; // Tableau d'objets de produit
  isLoading: boolean = false; // Indicateur pour montrer si les données sont en cours de chargement

  constructor(
    private productService: ProductsService, // Service pour récupérer les produits
    private modalService: NgbModal // Service de fenêtre modale
  ) {}

  // Méthode pour ouvrir une fenêtre modale avec les détails d'un produit spécifique
  open = (index: number) => {
    this.modalRef = this.modalService.open(ProductModalComponent); // Ouvre une fenêtre modale avec le composant ProductModalComponent

    this.modalRef.componentInstance.product = this.products[index]; // Passe le produit spécifique au composant de la fenêtre modale
  };

  ngOnInit(): void {
    this.isLoading = true; // Indique que les données sont en cours de chargement

    this.retrieveProducts(); // Récupère les produits
  }

  // Méthode pour récupérer les produits en utilisant le service ProductsService
  retrieveProducts = () => {
    this.productService.getProducts().subscribe((data) => {
      this.products = data; // Met à jour le tableau de produits avec les données renvoyées par le service
      this.isLoading = false; // Indique que le chargement est terminé
    });
  };
}
