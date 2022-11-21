import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectProduct } from 'src/app/state/selectors/product.selectors';
import { ProductModel } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  imgURL: string = 'assets/images/no-photo/nophoto.jpg';
  productForm!: UntypedFormGroup;
  product!: ProductModel;
  selectedProduct$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.onChangedSelected();
    this.initProductForm();
  }

  onChangedSelected() {
    this.selectedProduct$ = this.store.select(selectProduct);
    this.selectedProduct$.subscribe(response => {
      this.product = response.selectedProduct;
      this.imgURL = this.product.imgURL;
    })
  }

  initProductForm(): void {
    this.productForm = new UntypedFormGroup({
      id: new UntypedFormControl(this.product.id),
      name: new UntypedFormControl(this.product.name, Validators.required),
      price: new UntypedFormControl(this.product.price, Validators.required),
      serialNumber: new UntypedFormControl(this.product.serialNumber, Validators.required),
      imgURL: new UntypedFormControl(this.product.imgURL, Validators.required),
      description: new UntypedFormControl(this.product.description, Validators.required)
    });
  }

  async editProduct() {
    await this.productService.updateProduct(this.productForm.value);
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
