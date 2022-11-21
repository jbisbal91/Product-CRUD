import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { combineLatest, filter, map, startWith } from "rxjs/operators";
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
  products: ProductModel[] = [];
  selectedProduct$: Observable<any> = new Observable();

  search$: Observable<any> = new Observable();

  @Output() onclick = new EventEmitter<any>();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.products$ = this.store.select(selectFeatureCount);
    this.products$.subscribe(products => {
      if(products !== undefined) {
        this.products = products;
      }
    })
    this.onChangedSelected();
    this.onChangedSearch();
  }

  onChangedSearch(){
    this.search$ = this.store.select(selectProduct);
    this.search$.subscribe(response => {
      this.products$.pipe(
        combineLatest(this.search$.pipe(startWith(''))),
        map(([products]) => products.filter((product:any) =>
         product.name.toLowerCase().includes(response.search.toLowerCase())||
         product.serialNumber.toLowerCase().includes(response.search.toLowerCase())||
         product.description.toLowerCase().includes(response.search.toLowerCase())
         )))
        .subscribe(filteredProducts => {
          if(filteredProducts!== undefined){
            this.products = filteredProducts;
          }
        });
    })
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
