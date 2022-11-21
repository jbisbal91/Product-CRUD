import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  selectedProduct!: ProductModel;

  constructor(private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.selectedProduct = data;
  }

  ngOnInit(): void {
  }

  async deleteProduct() {
    await this.productService.deleteProduct(this.selectedProduct);
  }

}
