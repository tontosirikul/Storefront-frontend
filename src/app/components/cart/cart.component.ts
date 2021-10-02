import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { Info } from 'src/app/model/Info';
import { ConfirmationService } from 'src/app/services/confirmation/confirmation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  total: number = 0;
  innerWidth: any;
  info: Info = new Info();
  constructor(
    private CartService: CartService,
    private ConfirmationService: ConfirmationService,
    private Router: Router
  ) {
    this.info.fullname = '';
    this.info.address = '';
    this.info.creditcard = '';
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.cart = this.CartService.getCart();
    this.total = this.CartService.getTotalPrice();
  }
  onChange(e: number, product: Product) {
    this.CartService.quantityChange(product, e);
    this.total = this.CartService.getTotalPrice();
  }
  submitform(): void {
    const new_info = {
      fullname: this.info.fullname,
      address: this.info.address,
      creditcard: this.info.creditcard,
      totalspend: this.CartService.getTotalPrice(),
    };
    console.log('here');
    this.ConfirmationService.addOrderInfo(new_info);
    this.CartService.resetCart();
    this.info.fullname = '';
    this.info.address = '';
    this.info.creditcard = '';
    this.Router.navigate(['/confirmation']);
  }
  removeProduct(product: Product) {
    this.CartService.removeFromCart(product);
    this.cart = this.CartService.getCart();
  }
}
