import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ProductModel } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  imgURL: string = 'assets/images/no-photo/nophoto.jpg';
  productForm!: UntypedFormGroup;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.initProductForm();
  }

  initProductForm(): void {
    this.productForm = new UntypedFormGroup({
      name: new UntypedFormControl('', Validators.required),      
      price: new UntypedFormControl('', Validators.required),
      serialNumber: new UntypedFormControl('', Validators.required),
      imgURL: new UntypedFormControl('', Validators.required),
      description: new UntypedFormControl('', Validators.required)
    });
  }

  async createProduct() {    
    await this.productService.createProduct(this.productForm.value);
  }

  uploadImage(): void {
    if (this.productForm.value.imgURL !== '') {
      this.imgURL = this.productForm.value.imgURL;
    }
    else {
      this.imgURL = 'assets/images/no-photo/nophoto.jpg';
    }
  }
}
