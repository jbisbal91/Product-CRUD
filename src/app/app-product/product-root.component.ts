import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product-root',
  templateUrl: './product-root.component.html',
  styleUrls: ['./product-root.component.scss']
})
export class ProductRootComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

  }

}
