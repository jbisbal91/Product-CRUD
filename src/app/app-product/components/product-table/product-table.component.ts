import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllProducts, loadProducts } from 'src/app/state/actions/product.actions';
import { AppState } from 'src/app/state/app.state';
import { selectFeatureCount } from 'src/app/state/selectors/product.selectors';
import { ProductModel } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  products: any[] = [];

  products$:Observable<any> = new Observable();

  selectedRow: any;
  @Output() onclick = new EventEmitter<any>();
  constructor(private productService: ProductService,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.products$ = this.store.select(selectFeatureCount);
  }

  truncate(description: string) {
    return description.length > 100 ? `${description.substring(0, 100)}...` : description;
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
      this.store.dispatch(loadProducts())
      this.store.dispatch(getAllProducts({products:products}))
    })
  }

  onChangeSelectedRow(selectedRow: any) {
    if (this.selectedRow.id === selectedRow.id) {
      this.selectedRow = null;
      this.onclick.emit(undefined);
    } else {
      this.selectedRow = selectedRow;
      this.onclick.emit(selectedRow);
    }
  }

  ondblclick(row: any) {

  }
}
