import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() hideProduct: EventEmitter<Product> = new EventEmitter();
  quantity: number = 1;
  constructor(private CartService: CartService) {}

  ngOnInit(): void {}
  addProductToCart(product: Product) {
    this.CartService.addProductToCart(product, this.quantity);
    this.quantity = 1;
  }
  hideThisProduct(product: Product): void {
    this.hideProduct.emit(product);
  }
}
