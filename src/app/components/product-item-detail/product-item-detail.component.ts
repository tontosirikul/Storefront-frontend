import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss'],
})
export class ProductItemDetailComponent implements OnInit {
  product_id!: number;
  product: Product = new Product();
  constructor(
    private router: ActivatedRoute,
    private ProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((res) => {
      this.product = res.filter(
        (p) => p.id == this.router.snapshot.params.id
      )[0];
    });
  }
}
