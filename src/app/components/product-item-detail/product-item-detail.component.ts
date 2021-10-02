import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss'],
})
export class ProductItemDetailComponent implements OnInit {
  product_id!: number;
  product: Product = new Product();
  innerWidth: any;
  quantity: number = 1;
  constructor(
    private router: ActivatedRoute,
    private ProductService: ProductService,
    private CartService: CartService
  ) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.ProductService.getProducts().subscribe((res) => {
      this.product = res.filter(
        (p) => p.id == this.router.snapshot.params.id
      )[0];
    });
  }
  addProductToCart(product: Product) {
    this.CartService.addProductToCart(product, this.quantity);
    this.quantity = 1;
  }
}
