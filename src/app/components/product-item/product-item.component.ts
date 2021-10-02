import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  constructor() {}

  ngOnInit(): void {}
}
