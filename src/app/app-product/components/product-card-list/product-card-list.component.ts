import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectFeatureCount, selectProduct } from 'src/app/state/selectors/product.selectors';
import { ProductModel } from '../../models/product.interface';
@Component({
  selector: 'product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss']
})
export class ProductCardListComponent implements OnInit {
  products$: Observable<any> = new Observable();
  selectedProduct: ProductModel = { id: '-1', name: '', price: 0, serialNumber: '', imgURL: '', description: ''};
  selectedProduct$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.products$ = this.store.select(selectFeatureCount);
    this.onChangedSelected();
  }

  onChangedSelected(){
    this.selectedProduct$ = this.store.select(selectProduct);
    this.selectedProduct$.subscribe(response => {
      this.selectedProduct = response.selectedProduct;
    })
  }

}
