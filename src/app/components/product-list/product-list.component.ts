import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }
  hideProduct(product: Product): void {
    this.products = this.products.filter((p) => p.id !== product.id);
  }
}
