import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UsersComponent } from './users/users.component';
import { UsersModalComponent } from './users-modal/users-modal.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersModalComponent } from './orders-modal/orders-modal.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductModalComponent, HomeComponent, ContactFormComponent, UsersComponent, UsersModalComponent, OrdersComponent, OrdersModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgbModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
