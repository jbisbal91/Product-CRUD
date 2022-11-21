import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectedProduct } from 'src/app/state/actions/product.actions';
import { AppState } from 'src/app/state/app.state';
import { ProductModel } from '../../models/product.interface';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: ProductModel;
  @Input() selected: boolean = false;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onChangedSelected() {
    if (this.selected) {
      this.selected = false;
      this.store.dispatch(selectedProduct({ selectedProduct:  { id: '-1', name: '', price: 0, serialNumber: '', imgURL: '', description: ''} })); 
    } else {
      this.selected = true;
      this.store.dispatch(selectedProduct({ selectedProduct: this.product })); 
    }
  }

  truncate(description: string) {
    return description.length > 200 ? `${description.substring(0, 200)}...` : description;
  }

}
