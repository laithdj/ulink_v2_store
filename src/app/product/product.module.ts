import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),

    ProductRoutingModule,

  ]
})
export class ProductModule { }
