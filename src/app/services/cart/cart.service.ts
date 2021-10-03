import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];
  constructor(private Router: Router) {}

  addProductToCart(product: Product, quantity: number): void {
    if (this.cart.filter((inCart) => inCart.id === product.id).length !== 0) {
      let index = this.cart.findIndex((x) => x.id === product.id);
      this.cart[index].quantity += parseInt(quantity as unknown as string);
    } else {
      product.quantity = parseInt(quantity as unknown as string);
      this.cart.push(product);
    }
    if (
      confirm(
        'You have ' +
          this.cart.map((added) => `${added.name} X ${added.quantity} `) +
          'in cart.\n' +
          'Proceed to checkout ?'
      )
    ) {
      this.Router.navigate(['/cart']);
    }
  }
  quantityChange(product: Product, quantity: number) {
    if (quantity < 0) {
      this.removeFromCart(product);
    } else {
      let index = this.cart.findIndex((x) => x.id === product.id);
      this.cart[index].quantity = parseInt(quantity as unknown as string);
      console.log(this.cart);
    }
  }
  getCart(): Product[] {
    return this.cart;
  }
  removeFromCart(product: Product) {
    this.cart = this.cart.filter((p) => p.id !== product.id);
    alert(`${product.name} has been removed.`);
  }
  getTotalPrice(): number {
    return parseFloat(
      this.cart.reduce((sum, p) => sum + p.quantity * p.price, 0).toFixed(2)
    );
  }
  resetCart(): void {
    this.cart = [];
  }
}
