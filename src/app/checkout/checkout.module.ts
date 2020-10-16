import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
