import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectedProduct } from 'src/app/state/actions/product.actions';
import { AppState } from 'src/app/state/app.state';
import { selectFeatureCount, selectProduct } from 'src/app/state/selectors/product.selectors';
import { ProductModel } from '../../models/product.interface';
@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  selectedRow: ProductModel = { id: '-1', name: '', price: 0, serialNumber: '', imgURL: '', description: ''};
  products$: Observable<any> = new Observable();
  selectedProduct$: Observable<any> = new Observable();

  @Output() onclick = new EventEmitter<any>();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.products$ = this.store.select(selectFeatureCount);
    this.onChangedSelected();
  }

  onChangedSelected(){
    this.selectedProduct$ = this.store.select(selectProduct);
    this.selectedProduct$.subscribe(response => {
      this.selectedRow = response.selectedProduct;
    })
  }

  truncate(description: string) {
    return description.length > 100 ? `${description.substring(0, 100)}...` : description;
  }

  onChangeSelectedRow(selectedRow: ProductModel) {
    if (this.selectedRow.id === selectedRow.id) {
      this.selectedRow = { id: '-1', name: '', price: 0, serialNumber: '', imgURL: '', description: ''};
      this.onclick.emit(undefined);
    } else {
      this.selectedRow = selectedRow;
    }
    this.store.dispatch(selectedProduct({ selectedProduct: this.selectedRow }));
  }

}
