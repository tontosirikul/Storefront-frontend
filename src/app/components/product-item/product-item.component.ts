import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  quantity: number = 1;
  constructor(private CartService: CartService) {}

  ngOnInit(): void {}
  addProductToCart(product: Product) {
    this.CartService.addProductToCart(product, this.quantity);
    this.quantity = 1;
  }
}
