import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { search } from 'src/app/state/actions/product.actions';
import { AppState } from 'src/app/state/app.state';
import { selectFeatureCount, selectProduct } from 'src/app/state/selectors/product.selectors';
import { ProductModel } from '../../models/product.interface';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';

@Component({
  selector: 'product-toolbar',
  templateUrl: './product-toolbar.component.html',
  styleUrls: ['./product-toolbar.component.scss']
})
export class ProductToolbarComponent implements OnInit {
  selectedProduct: ProductModel = { id: '-1', name: '', price: 0, serialNumber: '', imgURL: '', description: '' };
  length: number = 0;
  products$: Observable<any> = new Observable();
  @Output() onChangedView = new EventEmitter<string>();
  selectedProduct$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.select(selectFeatureCount).subscribe(products => {
      this.length = products.length;
    });
    this.onChangedSelected();
  }

  search(searchValue: any) {
    this.store.dispatch(search({ search: searchValue.value }));
  }

  onChangedSelected() {
    this.selectedProduct$ = this.store.select(selectProduct);
    this.selectedProduct$.subscribe(response => {
      this.selectedProduct = response.selectedProduct;
    })
  }

  change(value: string) {
    this.onChangedView.emit(value);
  }

  openAddNewProduct() {
    this.dialog.open(ProductCreateComponent, {
      width: '700px'
    });
  }

  openEditProduct() {
    this.dialog.open(ProductEditComponent, {
      width: '700px'
    });
  }

  openDeleteProduct() {
    this.dialog.open(ProductDeleteComponent, {
      width: '500px',
      data: this.selectedProduct
    });
  }
}
